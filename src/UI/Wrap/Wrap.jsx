import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;

const Wrap = (props) => {
  return <Container>{props.children}</Container>;
};

export default Wrap;
