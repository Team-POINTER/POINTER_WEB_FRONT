import React from "react";
import { Header } from "../components/Header/Header";
import styled from "styled-components";

const Nickname = styled.h3`
    width: 80%;
    color: var(--white, #FFF);
    margin-left: 28.87px;
    /* B 30 */
    font-family: Noto Sans KR;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 170%; /* 51px */
`;

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 852px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const Table = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 80%;
  display: flex;
  align-items: center;
  color: var(--white, #FFF);
  /* R 16 */
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  border-bottom: 1px solid rgb(255,255,255, 0.5);
`;
/*
const Line = styled.div`
  margin: 0 auto;
  width: 100%;
  margin: 0, 21.5, 0, 21.5;
  
`;
*/

export const SettingPage = () => {
  return (
    <>
      <Header/>
      <Wrap>
        <Nickname>포인터 님</Nickname>
        <Table><img src="/img/Moon.png" alt="Moon"/> <p>모드 변경</p></Table>
        <Table><p>로그아웃</p></Table>
        <Table><p>회원 탈퇴</p></Table>
      </Wrap>
    </>
  )
}