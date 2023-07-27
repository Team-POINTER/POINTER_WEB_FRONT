import React, { useState, useEffect, Fragment } from 'react';
import { Header } from '../components/Header/Header';
import styled from "styled-components";
import topUser from '../mock/topUser.json';
import { useNavigate } from 'react-router-dom';
import { TopUser } from '../components/UserResult/TopUser';
import { MySelf } from '../components/UserResult/Myself';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getCookie } from '../function/cookie';
import { getUserInfo } from '../api/auth';

const UserResult = styled.section`
  width: 759px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--white, #FFF);
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
  border: 2px solid var(--orangered, #FF2301);
  background: transparent;

  color: var(--orangered, #FF2301);
  text-align: center;

  /* B 16 */
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  cursor: pointer;
`

const Question = styled.p`
  color: var(--white, #FFF);
  text-align: center;
  /* M 18 */
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding: 93px;
`

const RegisterBtn = styled.div`
  display: inline-flex;
  padding: 7px 17px 9px 17px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: var(--orangered, #ff2301);
  color: #fff;
  text-align: center;

  /* B 16 */
  font-size: 16px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  span {
    /* R 16 */
    font-weight: 400;
    line-height: 170%;
  }
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
  const [targetUser, setTargetUser] = useState('');
  const [userList, setUserList] = useState([]);
  const [totalVotingNum, setTotalVotingNum] = useState(0);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);



  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const user = await getUserInfo();

        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/votes/1`, 
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setMembers(response.data.result.members);
        setTargetUser(response.data.result.targetUser);
        // console.log(response.data.result.members);
        console.log(response);
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

  return (
    <Fragment>
      <Header/>
      <Question>{question}</Question>
      <Buttons>
        <RegisterBtn>질문 등록하기<span>22:22:11</span></RegisterBtn>
        <LinkCopy>링크로 초대</LinkCopy>
      </Buttons>
      <UserResult>
        {
          members.map((user, index) => (
            <TopUser key={user.userId} index={index} user={user} />
          ))
        }
        <Bottom>
          {targetUser!=='' && <MySelf user={targetUser} />}
          <MyResultBtn onClick={handleClick}>나의 결과 보기</MyResultBtn>
        </Bottom>
      </UserResult>
      
    </Fragment>
  );
};

