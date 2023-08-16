import React from "react";
import { Header } from "../components/Header/Header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../function/cookie";

const Nickname = styled.h3`
  width: 80%;
  color: var(--white, #fff);
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
  height: 852px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const Hr = styled.hr`
  width: 80%;
`;

const Table = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 80%;
  display: flex;
  align-items: center;
  color: var(--white, #fff);
  /* R 16 */
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
`;
/*
const Line = styled.div`
  margin: 0 auto;
  width: 100%;
  margin: 0, 21.5, 0, 21.5;
  
`;
*/

export const SettingPage = () => {
  const { userInfo } = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(AuthService.kakaoLogout()).then(() => {
      navigate("/");
    });
  };
  const UserDeleteHandler = () => {
    console.log(1);
    axios.delete(`${process.env.REACT_APP_BASE_URL}/user/resign`, {
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    })
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    })
  }
  return (
    <>
      <Header />
      <Wrap>
        <Nickname> {userInfo && userInfo.userName + " 님"}</Nickname>
        <Table>
          <img src="/img/Moon.png" alt="Moon" /> <p>모드 변경</p>
        </Table>
        <Hr />
        <Table onClick={logout}>
          <p>로그아웃</p>
        </Table>
        <Hr />
        <Table onClick={UserDeleteHandler}>
          <p>회원 탈퇴</p>
        </Table>
        <Hr />
      </Wrap>
    </>
  );
};
