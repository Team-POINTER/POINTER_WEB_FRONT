import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header/Header';
import styled from "styled-components";
import topUser from '../mock/topUser.json';
import { useNavigate } from 'react-router-dom';
import { TopUser } from '../components/UserResult/TopUser';
import { MySelf } from '../components/UserResult/Myself';

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;

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
`

export const PointResult = ({ room }) => {
  const [userList, setUserList] = useState([]);
  const [totalVotingNum, setTotalVotingNum] = useState(0);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const topUserData = topUser[0];
    setUserList(topUserData.memberList);
    setTotalVotingNum(topUserData.totalVotingNum);
    setQuestion(topUserData.questionName);
  }, []);


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/result");
  };

  return (
    <Wrap>
      <Header />
      <Question>{question}</Question>
      <UserResult>
        {userList.map((user, index) => (
          <div key={user.userId}>
            {index < userList.length - 1 ? (
              <TopUser index={index} user={user} totalVotingNum={totalVotingNum} />
            ) : (
              <MySelf user={user} totalVotingNum={totalVotingNum} />
            )}
          </div>
        ))}
        
        <MyResultBtn onClick={handleClick}>나의 결과 보기</MyResultBtn>
      </UserResult>
      
    </Wrap>
  );
};

