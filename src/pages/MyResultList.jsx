import React, { Fragment, useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../function/cookie";
import { myResultList } from "../api/room";
import { useDispatch } from "react-redux";
import { RoomService } from "../service/RoomService";
import RoomWrap from "../UI/RoomWrap/RoomWrap";
import { RoomBox } from "../components/RoomList/RoomBox";
import styled from "styled-components";
import RoomContainer from "../UI/RoomContainer/RoomContainer";
import ResultBox from "../components/ResultList/ResultBox";
import Wrap from "../UI/Wrap/Wrap";

const MyResultList = (props) => {
  const { state } = useLocation();
  const { roomData } = state;
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await myResultList(roomData.roomId);
      setRoomList(response);
      console.log(response);
    };
    fetch();
  }, []);

  return (
    <Wrap>
      <Header />
      {roomList && (
        <RoomWrap>
          <RoomContainer row={roomList.length}>
            {roomList.map((room, index) => (
              <ResultBox roomData={room} key={index}></ResultBox>
            ))}
          </RoomContainer>
        </RoomWrap>
      )}
    </Wrap>
  );
};

export default MyResultList;
