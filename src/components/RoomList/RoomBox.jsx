import React from "react";
import styled from "styled-components";
import Icon from "../../icon/Icon";
import IconBox from "../../icon/IconBox";

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

export const RoomBox = ({ roomData }) => {
  return (
    <Wrap>
      <Upper>
        <Title>{roomData.title}</Title>
        <Question>{roomData.recentQuestion}</Question>
      </Upper>

      <Bottom>
        <Cnt style={{ marginRight: "11px" }}>{roomData.memberCnt}명</Cnt>
        <IconBox style={{ marginRight: "3px" }}>
          <Icon icon="writerMark" />
        </IconBox>
        <Writer>{roomData.roomWriter}님</Writer>
      </Bottom>
    </Wrap>
  );
};
