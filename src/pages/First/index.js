import React, { useState } from "react";
import Confetti from "react-confetti";
import styled from "styled-components";

const FirstPage = styled.div`
  font-family: 'PT Sans', sans-serif;
  height: 100%;
`;

export default ({ children }) => {
  const [confettiComplete, setConfettiComplete] = useState(false);

  const width = window && window.innerWidth;

  const height = window && window.innerHeight;

  const onConfettiComplete = () => setConfettiComplete(true);

  return (
    <FirstPage>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
        onConfettiComplete={onConfettiComplete}
      />
      {children && confettiComplete ? children : null}
    </FirstPage>
  );
};
