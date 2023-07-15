import React from 'react';
import styled from "styled-components";

const TopUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--black, #000);
  /* font-family: Noto Sans KR; */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const VotingInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Separator = styled.span`
  margin: 0 5px;
`;


export const TopUser = ({ index, user, totalVotingNum }) => {
  return (
    <TopUserContainer>
      <UserInfo>
        <span>{index + 1}. {user.name}</span>
      </UserInfo>
      <VotingInfo>
        <span>{user.votingNum}</span>
        <Separator>/</Separator>
        <span>{totalVotingNum}</span>
      </VotingInfo>
    </TopUserContainer>
  );
};