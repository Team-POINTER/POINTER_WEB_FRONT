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
import BasicModal from "../components/Modal/BasicModal/BasicModal";

const MyResultList = (props) => {
  const { state } = useLocation();
  const { roomData } = state;
  const [roomList, setRoomList] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const response = await myResultList(roomData.roomId);
      setRoomList(response);
      console.log(response);
    };
    fetch();
  }, []);

  const modalHandler = () => {
    setIsModal(true);
    console.log(isModal);
  };

  const modalReturnHandler = () => {
    setIsModal(false);
    window.open("https://www.apple.com/kr/app-store/", "_blank");
  };

  const modalBackClick = () => {
    setIsModal(false);
  };

  return (
    <Wrap>
      <Header />
      {roomList && (
        <RoomWrap>
          <RoomContainer row={roomList.length}>
            {roomList.map((room, index) => (
              <ResultBox
                onClick={modalHandler}
                roomData={room}
                key={index}
              ></ResultBox>
            ))}
          </RoomContainer>
        </RoomWrap>
      )}
      {isModal && (
        <BasicModal
          title="포인터 앱에서 결과를 확인해보세요"
          returnComment="앱스토어로 이동"
          onConfirm={modalReturnHandler}
          onClickBack={modalBackClick}
        />
      )}
    </Wrap>
  );
};

export default MyResultList;
