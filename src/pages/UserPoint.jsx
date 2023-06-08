import React from 'react';
import { Header } from '../components/Header/Header';
import styled from "styled-components";
import { HintSection } from '../components/Hint/HintSection';
import userList from "../mock/user-cell.json";
import { UserBox } from '../components/UserList/UserBox';

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

export const UserPoint = () => {
  return (
    <>
      <Header />
      <Container>
        <HintSection />
        <PointBtn> <img src="/img/POINT_btn.png" alt="" /> </PointBtn>
        <Notice>질문에 알맞는 사람을 한 명 이상 선택해주세요!</Notice>
        {userList && (
          <StyledUl>
            {userList.map(user => <UserBox userData={user} key={user.id} />)}
          </StyledUl>
        )}
      </Container>
    </>
  );
}
