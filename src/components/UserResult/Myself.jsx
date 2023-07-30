import React from 'react';
import styled from "styled-components";

const MySelfContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  color: var(--black, #000);
  /* B 18 */
  /* font-family: Noto Sans KR; */
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
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


export const MySelf = ({ user  }) => {

  return (
    <MySelfContainer>
      <UserInfo>
        <span>{user.userName}</span>
      </UserInfo>
      <VotingInfo>
        <span>{user.votedMemberCnt}</span>
        <Separator>/</Separator>
        <span>{user.allVoteCnt}</span>
      </VotingInfo>
    </MySelfContainer>
  );
};