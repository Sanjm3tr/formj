import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const DarkBackground = styled.div`
  background-color: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4444;
  }
`;

const bloomAnimation = keyframes`
  0% {
    transform: scale(0.1) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`;

const BloomingFlower = styled.div`
  font-size: 0;
  animation: ${bloomAnimation} 3s ease-out;
  display: inline-block;
  position: relative;
  width: 150px;
  height: 200px;
`;

const Petal = styled.div`
  width: 50px;
  height: 100px;
  background: #ff69b4;
  position: absolute;
  border-radius: 50%;
  transform: rotate(60deg);
`;

const LoveAnimation = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [response, setResponse] = useState("");

  const handleResponse = (answer) => {
    setResponse(answer);
    setShowQuestion(false);
  };

  return (
    <DarkBackground>
      {showQuestion ? (
        <div>
          <h1>Will You Be My Girlfriend?</h1>
          <ButtonContainer>
            <Button onClick={() => handleResponse("yes")}>Yes</Button>
            <Button onClick={() => handleResponse("no")}>No</Button>
          </ButtonContainer>
        </div>
      ) : null}
      {response === "yes" && !showQuestion && (
        <div>
          <BloomingFlower>
            <Petal />
            <Petal style={{ transform: "rotate(60deg)" }} />
            <Petal style={{ transform: "rotate(120deg)" }} />
            <Petal style={{ transform: "rotate(180deg)" }} />
            <Petal style={{ transform: "rotate(240deg)" }} />
            <Petal style={{ transform: "rotate(300deg)" }} />
          </BloomingFlower>
          <h2>A real slay gangster shit</h2>
          <h3>What kind of tea do you want?</h3>
        </div>
      )}
      {response === "no" && !showQuestion && <h2>Well i guess islam is a one lucky bastard haha</h2>}
    </DarkBackground>
  );
};

export default LoveAnimation;
