import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Message = styled.p`
  font-family: "PT Sans", sans-serif;
  font-size: 36px;
  text-align: center;
`;

export default () => {
  return (
    <Container>
      <Message>
        Hope you have a wonderful day filled with love and hapiness as today is
        the day you were brought into this world!
      </Message>
    </Container>
  );
};
