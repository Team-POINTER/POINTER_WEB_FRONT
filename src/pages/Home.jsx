import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { RoomBox } from "../components/RoomList/RoomBox";
import theme from "../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../api/auth";
import { AuthService } from "../service/AuthService";
import { RoomService } from "../service/RoomService";
import { getCookie } from "../function/cookie";
import { useState } from "react";
import RoomWrap from "../UI/RoomWrap/RoomWrap";
import RoomContainer from "../UI/RoomContainer/RoomContainer";
import Wrap from "../UI/Wrap/Wrap";

export const Home = () => {
  const { accessToken, userId } = useSelector((state) => state.member);
  const { roomList } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const refreshToken = getCookie("refreshToken");

  useEffect(() => {
    if (refreshToken) {
      const dto = { keyword: keyword };
      dispatch(RoomService.myResultList(dto));
    }
  }, [refreshToken]);

  return (
    <Wrap>
      <Header />
      {roomList && (
        <RoomWrap>
          <RoomContainer row={roomList.length}>
            {roomList.map((room, index) => (
              <RoomBox roomData={room} key={index}></RoomBox>
            ))}
          </RoomContainer>
        </RoomWrap>
      )}
    </Wrap>
  );
};
