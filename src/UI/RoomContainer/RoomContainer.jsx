import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${({ row }) => (row / 2) * (126.75 + 18) + "px"};

  display: flex;
  gap: 22px;
  flex-wrap: wrap;
`;

const RoomContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default RoomContainer;
