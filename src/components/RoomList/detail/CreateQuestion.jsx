import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../../../icon/Icon";
import IconBox from "../../../icon/IconBox";
import { useEffect } from "react";
import { Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Head = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  padding-bottom: 0px;

  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding-top: 60px;

  @media screen and (max-width: 834px) {
    padding-top: 8px;
  }
`;

const Content = styled.div``;

const InputBox = styled.div`
  min-height: 27px;
  text-align: center;
  textarea {
    color: var(--grayscale-white, #fbfcff);
    text-align: center;
    font-size: 18px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    background: transparent;
    border: none;
    resize: none;

    width: 561px;
    @media (min-width: 835px) and (max-width: 1200px) {
      width: 561px;
    }
    @media screen and (max-width: 834px) {
      width: 258px;
    }
  }

  textarea::placeholder {
    color: var(--grayscale-60, #575a6b);
    text-align: center;
    /* M 18 */
    font-size: 18px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 43px;
  margin-bottom: 67px;
  display: flex;
  justify-content: center;
  gap: 18px;

  @media (min-width: 835px) and (max-width: 1200px) {
    margin-bottom: 54px;
  }
  @media screen and (max-width: 834px) {
    margin-bottom: 28px;
  }
`;

const RegisterBtn = styled.div`
  display: inline-flex;
  padding: 7px 17px 9px 17px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: var(--orangered, #ff2301);
  color: #fff;
  text-align: center;

  /* B 16 */
  font-size: 16px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  span {
    /* R 16 */
    font-weight: 400;
    line-height: 170%;
  }
`;

const LinkCopy = styled.div`
  display: inline-flex;
  height: 31px;
  padding: 6px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 999px;
  border: 1px solid var(--white, #fff);

  color: var(--white, #fff);
  text-align: center;
  /* B 16 */
  font-size: 16px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const RoomName = styled.div`
  color: var(--grayscale-white, #fbfcff);
  text-align: center;

  /* 15/m */
  font-size: 15px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;

const SmallComment = styled.div`
  color: var(--grayscale-40, #797d94);
  text-align: center;
  font-size: 12px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  position: absolute;
  top: 80px;
`;

const LargeComment = styled.div`
  color: var(--grayscale-40, #797d94);
  text-align: center;
  font-size: 12px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const UserName = styled.div`
  color: var(--white, #fff);
  text-align: right;
  font-size: 16px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  text-decoration-line: underline;
  cursor: pointer;
`;

const AlreadyCreatedAlert = styled.div`
  width: 331px;
  height: 193px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;

  /* 1 */
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
`;

const CommentBox = styled.div`
  color: var(--gray-70, #605f5f);
  text-align: center;
  height: 130px;
  /* M 18 */
  font-size: 18px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReturnButton = styled.div`
  cursor: pointer;
  color: var(--black, #000);
  text-align: center;
  font-size: 18px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const BoxHr = styled.div`
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background-color: #929292;
  margin-bottom: 16px;
`;

export const CreateQuestion = ({}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [editNameOpen, setEditNameOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const returnToRoom = () => {
    handleClose();
    navigate("/home/user-point");
  };

  const returnToMain = () => {
    navigate("/home");
  };

  return (
    <Wrap>
      {width <= 834 ? (
        <Head>
          <div style={{ position: "absolute", left: "16px" }}>
            <IconBox onClick={returnToMain}>
              <Icon icon="back" />
            </IconBox>
          </div>
          <RoomName>룸 이름</RoomName>
          <SmallComment>
            해당 룸에 하고 싶은 질문을 작성해주세요! <br />
            24시간마다 선착순 1명이 질문할 수 있습니다.
          </SmallComment>
        </Head>
      ) : (
        <Head>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <IconBox onClick={returnToMain}>
              <Icon icon="back" />
            </IconBox>
            <RoomName>룸 이름</RoomName>
          </div>
          <div style={{ marginLeft: width > 1200 ? "229px" : "51px" }}>
            <LargeComment>
              해당 룸에 하고 싶은 질문을 작성해주세요! 24시간마다 선착순 1명이
              질문할 수 있습니다.
            </LargeComment>
          </div>
          <div style={{ marginLeft: width > 1200 ? "270px" : "79px" }}>
            <UserName>포인터님</UserName>
          </div>
        </Head>
      )}
      <Content>
        <InputBox>
          {width > 834 ? (
            <textarea
              cols="45"
              rows="1"
              maxLength={45}
              placeholder="질문을 입력하세요."
            />
          ) : (
            <textarea
              cols="15"
              rows="3"
              maxLength={45}
              placeholder="질문을 입력하세요."
            />
          )}
        </InputBox>
      </Content>
      <Bottom>
        <RegisterBtn onClick={handleOpen}>
          질문 등록하기<span>22:22:11</span>
        </RegisterBtn>
        <LinkCopy>링크로 초대</LinkCopy>
      </Bottom>

      <Backdrop
        sx={{
          zIndex: 3,
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(20px)",
        }}
        open={open}
      >
        {open && (
          <AlreadyCreatedAlert>
            <CommentBox>다른 사람이 질문을 이미 등록했습니다.</CommentBox>
            <BoxHr />
            <ReturnButton onClick={returnToRoom}>돌아가기</ReturnButton>
          </AlreadyCreatedAlert>
        )}
      </Backdrop>
    </Wrap>
  );
};