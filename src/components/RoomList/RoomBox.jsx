import { Backdrop } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../../icon/Icon";
import IconBox from "../../icon/IconBox";
import theme from "../../styles/theme";

const Wrap = styled.div`
  width: 303.1px;
  height: 126.75px;
  background: #ffffff;
  border-radius: 10px;
  padding: 13.7px 25.3px 16.5px 21.6px;
`;

const Title = styled.div`
  width: 87px;
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
  width: 307px;
  height: 179px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 20px;
`;

const EditDiv = styled.div`
  width: 307px;
  height: 50px;
  background: #ffffff;
  border-radius: 25px;
  color: ${theme.colors.gray70};
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.M_18};
  cursor: pointer;
`;

const EditClose = styled(EditDiv)`
  width: 347px;
  margin-top: 4px;
  height: 70px;
`;

export const RoomBox = ({ roomData }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Wrap>
        <Upper>
          <Title>{roomData.title}</Title>
          <Question>{roomData.recentQuestion}</Question>
        </Upper>

        <Bottom>
          <BottomLeft>
            <Cnt style={{ marginRight: "11px" }}>{roomData.memberCnt}명</Cnt>
            <IconBox style={{ marginRight: "3px" }}>
              <Icon icon="writerMark" />
            </IconBox>
            <Writer>{roomData.roomWriter}님</Writer>
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
        onClick={handleClose}
      >
        {open && (
          <EditWrap>
            <EditBox>
              <EditContainer>
                <EditDiv>{"'" + roomData.title + "'의 이름 편집"}</EditDiv>
                <hr />
                <EditDiv>{"'" + roomData.title + "'에 링크로 초대"}</EditDiv>
                <hr />
                <EditDiv style={{ color: theme.colors.orangered }}>
                  {"룸 " + roomData.roomId + " 나가기"}
                </EditDiv>
              </EditContainer>
              <EditClose onClick={handleClose}>{"취소"}</EditClose>
            </EditBox>
          </EditWrap>
        )}
      </Backdrop>
    </>
  );
};
