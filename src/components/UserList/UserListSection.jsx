import React from 'react';
import styled from "styled-components";
import {v4 as uuidv4} from 'uuid';

const SectionContainer = styled.div`
  padding: 16px;
  height: 150px;
  width: 288px;
  overflow: auto;
`;


const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 8px 0;
  flex-wrap: wrap;
`;

const UserName = styled.li`
  font-size: 14px;
  color: white;
  flex-shrink: 0;
`;


export const UserListSection = ({ names }) => {
  return (
    <SectionContainer>
      <UserList>
        {names.map((name, index) => (
          
          <UserName key={uuidv4()}> <span>{index !== 0 && <span> &nbsp;· </span>}{name}</span></UserName>
        ))}
      </UserList>
    </SectionContainer>
  );
};

