import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import styled, { css }  from "styled-components";
import { HintSection } from "../components/Hint/HintSection";
import userList from "../mock/user-cell.json";
import { UserBox } from "../components/UserList/UserBox";
import { UserListSection } from "../components/UserList/UserListSection";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../function/cookie";
import { getAccessToken } from "../api/auth";
import { useSelector } from "react-redux";

const Wrap = styled.div`
  margin: 0 auto;
`;

const PointBtn = styled.button`
  width: 124px;
  min-height: 39px;
  cursor: pointer;
  background-color: #ff2301;
  ${(props) =>
    !props.available &&
    css`
      opacity: 0.5;
      cursor: default;
    `}
  border-radius: 1rem;
  color: white;
  
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 16px;

  @media (min-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 670px) and (max-width: 1019px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 669px) {
    grid-template-columns: 1fr;
  }
`;

const Notice = styled.p`
  font-size: 12px;
  color: #929292;
`;

const Question = styled.p`
  color: var(--white, #fff);
  text-align: center;
  /* M 18 */
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const UserPoint = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserNames, setSelectedUserNames] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { roomData } = state;
  console.log("roomData");
  console.log(roomData);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const user = await getAccessToken();
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/room/${roomData.roomId}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setMembers(response.data.data.roomMembers);
        setQuestion(response.data.data.question);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleUserSelect = (user) => {
    if (selectedUsers.includes(user.name)) {
      setSelectedUsers((prev) =>
        prev.filter((selectedUser) => selectedUser !== user.name)
      );
    } else {
      setSelectedUsers((prev) => [...prev, user.name]);
    }
  };

  const handlePointBtnClick = () => {
    navigate("/point-result", { state: { roomData } });
  };

  if (loading) {
    return <h1>로딩중</h1>;
  }

  return (
    <Wrap>
      <Header />
      <Container>
        <HintSection />
        <Question>{question}</Question>
        <UserListSection names={selectedUsers} />
        {selectedUsers.length ? (
          <PointBtn available={true} onClick={handlePointBtnClick}>
            <img src="/img/POINT_btn.png" alt="" />
          </PointBtn>
        ) : (
          <PointBtn disabled available={false} onClick={handlePointBtnClick}>
            <img src="/img/POINT_btn.png" alt="" />
          </PointBtn>
        )}
        <Notice>질문에 알맞는 사람을 한 명 이상 선택해주세요!</Notice>
        {members && (
          <StyledUl>
            {members.map((member) => (
              <UserBox
                key={member.userId}
                userData={member}
                handleUserSelect={handleUserSelect}
                isSelected={selectedUsers.includes(member)}
              />
            ))}
          </StyledUl>
        )}
      </Container>
    </Wrap>
  );
};
