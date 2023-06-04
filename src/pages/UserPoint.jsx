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
`;

export const UserPoint = () => {
  return (
    <>
      <Header />
      <HintSection />
      <PointBtn> <img src="/img/POINTER_btn.png" alt="" /> </PointBtn>
    </>
  );
}

