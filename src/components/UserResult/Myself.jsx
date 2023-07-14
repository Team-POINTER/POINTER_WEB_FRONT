import React from 'react';
import styled from "styled-components";

export const MySelf = ({ user, totalVotingNum }) => {
  const MySelfContainer = styled.div`
    margin-top: 53.14px;
    display: flex;
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

  return (
    <MySelfContainer>
      <UserInfo>
        <span>{user.name}</span>
      </UserInfo>
      <VotingInfo>
        <span>{user.votingNum}</span>
        <Separator>/</Separator>
        <span>{totalVotingNum}</span>
      </VotingInfo>
    </MySelfContainer>
  );
};