import React from 'react';
import styled from "styled-components";
import {v4 as uuidv4} from 'uuid';

const SectionContainer = styled.div`
  margin-top: 16px;
`;


const UserList = styled.ul`
  display: flex;
  flex-decoration: colum;
  list-style-type: none;
  padding: 0;
  margin: 8px 0;
`;

const UserName = styled.li`
  font-size: 14px;
  color: white;
`;

export const UserListSection = ({ names }) => {
  return (
    <SectionContainer>
      <UserList>
        {names.map((name) => (
          <UserName key={uuidv4()}>{name}</UserName>
        ))}
      </UserList>
    </SectionContainer>
  );
};
