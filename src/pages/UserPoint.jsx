import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header/Header';
import styled from "styled-components";
import { HintSection } from '../components/Hint/HintSection';
import userList from "../mock/user-cell.json";
import { UserBox } from '../components/UserList/UserBox';
import { UserListSection } from '../components/UserList/UserListSection';

const Wrap = styled.div`
  margin: 0 auto;
`;

const PointBtn = styled.button`
  width: 124px;
  height: 39px;
  background-color: #FF2301;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
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
  color: var(--white, #FFF);
  text-align: center;
  /* M 18 */
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`

export const UserPoint = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserNames, setSelectedUserNames] = useState([]);
  const [question, setQuestion] = useState('');

  const handleUserSelect = (user) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(user)) {
        return prevSelectedUsers.filter((selectedUser) => selectedUser !== user);
      } else {
        return [...prevSelectedUsers, user];
      }
    });
  };

  useEffect(() => {
    // Update the selected user names whenever selectedUsers changes
    const names = selectedUsers.map(user => user.userName);
    setSelectedUserNames(names);
  }, [selectedUsers]);

  const handlePointBtnClick = () => {
    // 선택된 사용자 정보를 출력
    console.log(selectedUsers);
  };

  return (
    <Wrap>
      <Header />
      <Container>
        <HintSection />
        <UserListSection names={selectedUserNames} />
        <Question>{question}</Question>
        <PointBtn onClick={handlePointBtnClick}>
          <img src="/img/POINT_btn.png" alt="" />
        </PointBtn>
        <Notice>질문에 알맞는 사람을 한 명 이상 선택해주세요!</Notice>
        {userList && (
          <StyledUl>
            {userList.map((user) => (
              <UserBox
                userData={user}
                key={user.id}
                handleUserSelect={handleUserSelect}
                isSelected={selectedUsers.includes(user)}
              />
            ))}
          </StyledUl>
        )}
      </Container>
    </Wrap>
  );
};
