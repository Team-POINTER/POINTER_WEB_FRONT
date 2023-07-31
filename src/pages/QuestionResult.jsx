import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import data from "../mock/questionResult.json";
import theme from "../styles/theme";

const Wrap = styled.div`
  height: 486px;
  width: 100%;
`;

const Question = styled.div`
  width: 285px;
  margin: 0 auto;
  height: 54px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  margin-bottom: 25px;
`;

const Container = styled.div`
  width: 409px;
  height: 363px;
  background: ${theme.colors.white};
  border-radius: 30px;
  margin: 0 auto;
  padding: 23px;
  @media (min-width: 835px) and (max-width: 1200px) {
  }

  @media screen and (max-width: 834px) {
    width: 322px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 18px;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const MyName = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  color: ${theme.colors.black};
  margin-bottom: 10px;
`;

const MemberList = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: ${theme.colors.black};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomLeft = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: ${theme.colors.orangered};
`;

const BottomRight = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  color: ${theme.colors.black};
`;

export const QuestionResult = () => {
  return (
    <Wrap>
      <Header />
      <Question>{data[0].questionName}</Question>
      <Container>
        <InnerContainer>
          <div>
            <MyName>{"포인터 님을 지목한 사람"}</MyName>
            <MemberList>
              {data[0].memberList.map((member, index) => (
                <div>
                  <div>
                    {index + 1}
                    {". " + member.name}
                  </div>
                </div>
              ))}
            </MemberList>
          </div>
          <div>
            <Bottom>
              <BottomLeft>{data[0].memberList.length + " / " + 20}</BottomLeft>
              <BottomRight>{data[0].createdAt}</BottomRight>
            </Bottom>
          </div>
        </InnerContainer>
      </Container>
    </Wrap>
  );
};
