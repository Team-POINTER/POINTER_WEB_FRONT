import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../../../icon/Icon";
import IconBox from "../../../icon/IconBox";
import { useEffect } from "react";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Head = styled.div`
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

export const CreateQuestion = ({}) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrap>
      <Head>
        <IconBox>
          <Icon icon="back" />
        </IconBox>
      </Head>
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
        <RegisterBtn>
          질문 등록하기<span>22:22:11</span>
        </RegisterBtn>
        <LinkCopy>링크로 초대</LinkCopy>
      </Bottom>
    </Wrap>
  );
};
