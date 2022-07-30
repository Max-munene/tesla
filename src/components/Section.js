import React from "react";
import styled from "styled-components";

function Section() {
  return <Wrap>Section</Wrap>;
}

export default Section;

const Wrap = styled.div`
  width: 100vh;
  height: 100vh;
  background-size: cover;
  //   background: orange;
  background-image: url("/images/model-s.jpg");
`;
