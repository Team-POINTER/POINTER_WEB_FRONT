import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { RoomBox } from "../components/RoomList/RoomBox";
import roomList from "../mock/room.json";
import theme from "../styles/theme";

const Wrap = styled.div`
  margin: 0 auto;
`;

const RoomContainer = styled.div`
  height: ${({ row }) => (row / 2) * (126.75 + 18) + "px"};

  display: flex;
  gap: 22px;
  flex-wrap: wrap;
`;

const RoomWrap = styled.div`
  width: 1094px;
  height: 70vh;
  ${theme.scrollY};
  padding: 0px 21.5px;

  @media (min-width: 835px) and (max-width: 1200px) {
    width: 722px;
    margin: 0 auto;
  }

  @media screen and (max-width: 834px) {
    width: 350px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 18px;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <Header />
      {roomList && (
        <RoomWrap>
          <RoomContainer row={roomList.length}>
            {roomList.reverse().map((room, index) => (
              <RoomBox roomData={room}></RoomBox>
            ))}
          </RoomContainer>
        </RoomWrap>
      )}
    </Wrap>
  );
};
