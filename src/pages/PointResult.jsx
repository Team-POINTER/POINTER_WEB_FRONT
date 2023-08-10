import React, { useState, useEffect, Fragment } from "react";
import { Header } from "../components/Header/Header";
import styled from "styled-components";
import topUser from "../mock/topUser.json";
import { useLocation, useNavigate } from "react-router-dom";
import { TopUser } from "../components/UserResult/TopUser";
import { MySelf } from "../components/UserResult/Myself";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import axios from "axios";
import { getCookie } from "../function/cookie";
import { getAccessToken, getUserInfo } from "../api/auth";
import QuestRegistBtn from "../components/QuestionRegistrationBtn/QuestRegistBtn";
import { roomLink } from "../api/room";

const UserResult = styled.section`
  width: 759px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--white, #fff);
  padding: 25.5px;
  margin: 0 auto;
  text-align: center;
  /* display: flex;
  flex-direction: column;  */
  /* align-items: center; */
  position: relative; /* 추가: UserResult를 바닥 기준으로 정렬하기 위해 */
`;

const Bottom = styled.div`
  width: 759px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
`;

const MyResultBtn = styled.button`
  display: inline-flex;
  padding: 7px 17px 9px 17px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 2px solid var(--orangered, #ff2301);
  background: transparent;

  color: var(--orangered, #ff2301);
  text-align: center;

  /* B 16 */
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  cursor: pointer;
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
  padding: 93px;
`;

const LinkCopy = styled.div`
  display: inline-flex;
  height: 31px;
  padding: 6px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 999px;
  border: 1px solid var(--white, #fff);

  color: var(--white, #fff);
  text-align: center;
  /* B 16 */
  font-size: 16px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  cursor: pointer;
`;

const Buttons = styled.div`
  width: 100%;
  height: 43px;
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
  gap: 18px;
  // @media (min-width: 835px) and (max-width: 1200px) {
  //   margin-bottom: 54px;
  // }
  // @media screen and (max-width: 834px) {
  //   margin-bottom: 28px;
  // }
`;

export const PointResult = ({ room }) => {
  const [members, setMembers] = useState([]);
  const [targetUser, setTargetUser] = useState("");
  const [userList, setUserList] = useState([]);
  const [totalVotingNum, setTotalVotingNum] = useState(0);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const { roomData } = state;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const user = await getAccessToken();
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/votes/${roomData.roomId}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setMembers(response.data.result.members);
        setTargetUser(response.data.result.targetUser);
        setQuestion(response.data.result.question);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/result");
  };

  const LinkHandler = async () => {
    try {
      const data = await roomLink(roomData.roomId);
      await navigator.clipboard.writeText(data);
      alert('클립보드에 복사되었습니다.');
    } catch (err) {
      console.log(err);
      alert('클립보드 복사에 실패하였습니다.');
    }
  };
  return (
    <Fragment>
      <Header />
      <Question>{question}</Question>
      <Buttons>
        <QuestRegistBtn />
        <LinkCopy onClick={LinkHandler}>링크로 초대</LinkCopy>
      </Buttons>
      <UserResult>
        {members.map((user, index) => (
          <TopUser key={user.userId} index={index} user={user} />
        ))}
        <Bottom>
          {targetUser !== "" && <MySelf user={targetUser} />}
          <MyResultBtn onClick={handleClick}>나의 결과 보기</MyResultBtn>
        </Bottom>
      </UserResult>
    </Fragment>
  );
};
