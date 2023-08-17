import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
import IconBox from "../icon/IconBox";
import { useEffect } from "react";
import { Backdrop } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import QuestRegistBtn from "../components/QuestionRegistrationBtn/QuestRegistBtn";
import QuestNonRegistBtn from "../components/QuestionRegistrationBtn/NonRegistBtn/QuestNonRegistBtn";
import { createQuestion, getQuestion, whetherQuestion } from "../api/question";
import BasicModal from "../components/Modal/BasicModal/BasicModal";

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
    outline: none;

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

export const CreateQuestion = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [InstallModal, setInstallModal] = useState(false);
  const [questionText, setQuestionText] = useState("");

  const [editNameOpen, setEditNameOpen] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  let roomData;
  if (state) {
    roomData = state.roomData;
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    // 질문 등록 가능 여부 판단 함수
    const questionOrNot = async () => {
      // 다른 사림이 이미 질문을 등록했는지 판단
      const response = await getQuestion(roomData);
      // 이미 질문 등록을 한 경우
      if (roomData.questionId != response.data.data.questionId) {
        setOpen(true);
        return;
      }
      const res = await whetherQuestion(roomData); // 생성일로부터 24시간이 지난 시간
      const limitedDate = new Date(roomData.limitedAt); // 지금 시각
      const today = new Date();
      // 모든 사람이 투표를 완료 || 등록 가능 사간이 되었을 때
      if (res || limitedDate - today <= 0) {
        createQuestion({ roomId: roomData.roomId, content: questionText });
        navigate("/user-point", { state: { roomData } });
      } else {
        setInstallModal(true);
      }
    };
    questionOrNot();
    // setOpen(true);
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
    navigate("/user-point", { state: { roomData } });
  };

  const returnToMain = () => {
    navigate("/home");
  };

  const goToAppStore = () => {
    window.open("https://www.apple.com/kr/app-store/", "_blank");
  };

  const clickBackHandler = () => setInstallModal(false);

  const textHandler = (e) => setQuestionText(e.target.value);

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
              rows="2"
              maxLength={45}
              placeholder="질문을 입력하세요."
              value={questionText}
              onChange={textHandler}
            />
          ) : (
            <textarea
              cols="15"
              rows="4"
              maxLength={45}
              placeholder="질문을 입력하세요."
              value={questionText}
              onChange={textHandler}
            />
          )}
        </InputBox>
      </Content>
      <Bottom>
        {questionText.length > 0 ? (
          <QuestRegistBtn onClickHandler={handleOpen} />
        ) : (
          <QuestNonRegistBtn />
        )}
        <LinkCopy>링크로 초대</LinkCopy>
      </Bottom>
      {open && (
        <BasicModal
          onConfirm={returnToRoom}
          title={"다른 사람이 질문을 이미 등록했습니다."}
          returnComment={"돌아가기"}
          onClickBack={clickBackHandler}
        />
      )}
      {InstallModal && (
        <BasicModal
          onConfirm={goToAppStore}
          title={"아직 질문을 등록할 시간이 아니에요!"}
          returnComment={"앱에서 시간 확인"}
          onClickBack={clickBackHandler}
        />
      )}
    </Wrap>
  );
};
