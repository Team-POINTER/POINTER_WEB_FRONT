import { Backdrop } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../../icon/Icon";
import IconBox from "../../icon/IconBox";
import theme from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateRoomForm } from "../../modules/room";
import { EditRoomName } from "./EditRoomName";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 303.1px;
  height: 126.75px;
  background: #ffffff;
  border-radius: 10px;
  padding: 13.7px 25.3px 16.5px 21.6px;
`;

const Title = styled.div`
  max-width: 300px;
  height: 24px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  color: #605f5f;
  margin-bottom: 3px;
`;

const Question = styled.div`
  width: 285px;
  height: 54px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
  margin-bottom: 25px;
`;

const Upper = styled.div``;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cnt = styled.div`
  width: 23px;
  height: 20px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #ff2301;
`;

const Writer = styled.div`
  width: 51px;
  height: 20px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #000000;
`;

const BottomLeft = styled.div`
  display: flex;
  align-items: center;
`;
const EditWrap = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 4;
  width: 100%;
  margin: 0 auto;
  animation: 0.4s ease-in-out loadEffect2;

  @keyframes loadEffect2 {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const EditBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditContainer = styled.div`
  width: 347px;
  height: 162px;
  background: #e8e9f3cc;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative;
  padding: 40px 0px 20px 0px;
  margin-bottom: 10px;
`;

const EditDiv = styled.div`
  width: 347px;
  height: 60px;
  color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.M_18};
  cursor: pointer;
  border-top: 1px solid ${theme.colors.grayscale_60};
`;

const EditClose = styled(EditDiv)`
  width: 347px;
  margin-top: 4px;
  height: 70px;
  border-radius: 15px;
`;

const EditRoomNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;

  width: 270px;
  height: 185px;

  background: rgba(232, 233, 243, 0.8);
  backdrop-filter: blur(11px);
  border-radius: 14px;
`;

const EditRoomNameTitle = styled.div`
  height: 26px;
  margin-bottom: 3px;
  margin-top: 16px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  /* identical to box height, or 26px */

  text-align: center;

  /* grayscale/black */

  color: #121212;
`;

const EditRoomNameComment = styled.div`
  height: 20px;

  margin-bottom: 16px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  /* identical to box height, or 20px */

  text-align: center;

  /* grayscale/black */

  color: #121212;
`;

const EditRoomNameInput = styled.input`
  width: 219px;
  height: 31px;
  border: none;
  border-radius: 25px;
  &:focus {
    outline: none;
  }
  padding-left: 12px;
`;

const EditRoomNameBottom = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  margin-top: 22px;
  border-top: 1px solid ${theme.colors.grayscale_60};
`;

const EditRoomNameBottomBtn = styled.div`
  width: 50%;
  ${theme.FlexCenter}
  cursor: pointer;
`;

export const RoomBox = ({ roomData }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editNameOpen, setEditNameOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const openRoomNameUpdate = (data) => {
    dispatch(setUpdateRoomForm(data));
    setEditNameOpen(true);
  };

  const moveToQuestionResult = () => {
    navigate("/result");
  };

  const moveToRoom = () => {
    navigate("/user-point", { state: { roomData } });
  };

  const shortenTitle = (title) => {
    let shortTitle = title;
    if (title.length > 8) {
      shortTitle = title.substr(0, 6) + "...";
    }

    return shortTitle;
  };

  return (
    <>
      <Wrap>
        <Upper onClick={moveToRoom} style={{ cursor: "pointer" }}>
          <Title>{roomData.roomNm}</Title>
          <Question>{roomData.question}</Question>
        </Upper>

        <Bottom>
          <BottomLeft>
            <Cnt style={{ marginRight: "11px" }}>{roomData.memberCnt}명</Cnt>
            <IconBox style={{ marginRight: "3px" }}>
              <Icon icon="writerMark" />
            </IconBox>
            <Writer>
              {roomData.voted && roomData.topUserName && roomData.topUserName}님
            </Writer>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={moveToQuestionResult}
            >
              결과보기
            </span>
          </BottomLeft>
          <IconBox onClick={handleOpen}>
            <Icon icon="roomEdit" />
          </IconBox>
        </Bottom>
      </Wrap>
      <Backdrop
        sx={{
          zIndex: 3,
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(20px)",
        }}
        open={open}
      >
        {open && (
          <EditWrap>
            <EditBox>
              <EditContainer>
                <EditDiv
                  style={{
                    height: "40px",
                    position: "absolute",
                    top: "0px",
                    fontSize: "14px",
                    color: theme.colors.grayscale_60,
                    border: "0px",
                  }}
                >
                  {"룸 '" + shortenTitle(roomData.roomNm) + "'에 대해"}
                </EditDiv>

                <EditDiv onClick={() => openRoomNameUpdate(roomData)}>
                  {"룸 이름 편집하기"}
                </EditDiv>

                <EditDiv>{"친구 초대하기"}</EditDiv>

                <EditDiv
                  style={{
                    color: theme.colors.orangered,
                  }}
                >
                  {"룸 나가기"}
                </EditDiv>
              </EditContainer>

              <EditClose
                style={{
                  background: "#e8e9f3cc",
                  color: theme.colors.grayscale_60,
                }}
                onClick={handleClose}
              >
                {"취소"}
              </EditClose>
            </EditBox>
            {editNameOpen && (
              <EditRoomName
                setEditNameOpen={setEditNameOpen}
                editNameOpen={editNameOpen}
                handleClose={handleClose}
              />
            )}
          </EditWrap>
        )}
      </Backdrop>
    </>
  );
};
