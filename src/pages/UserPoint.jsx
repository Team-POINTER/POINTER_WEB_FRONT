import React from 'react';
import { Header } from '../components/Header/Header';
import styled from "styled-components";
import { HintSection } from '../components/Hint/HintSection';

const PointBtn = styled.button`
  width: 124px;
  height: 39px;
  background-color: #FF2301;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
`;

export const UserPoint = () => {
  return (
    <>
      <Header />
      <HintSection />
      <PointBtn> <img src="/img/POINT_btn.png" alt="" /> </PointBtn>
    </>
  );
}

