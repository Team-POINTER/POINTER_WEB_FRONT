import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";

const Wrap = styled.div`
  width: 1094px;
  height: 70vh;
  ${theme.scrollY};
  padding: 0px 21.5px;

  @media (min-width: 835px) and (max-width: 1200px) {
    width: 722px;
    margin: 0 auto;
  }

  @media screen and (max-width: 834px) {
    width: 350px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 18px;
  }
`;

const RoomWrap = (props) => {
  return <Wrap>{props.children}</Wrap>;
};

export default RoomWrap;
