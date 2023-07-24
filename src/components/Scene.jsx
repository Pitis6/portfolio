import Spline from "@splinetool/react-spline";
import styled, { keyframes } from "styled-components";

export const Scene = () => {
  return (
    <Wrapper>
      <Spline scene="https://prod.spline.design/jpiX7NUyiQB29gP7/scene.splinecode" />
      <Shadow>
        <Arrow1>{`>`}</Arrow1>
        <Arrow2>{`>`}</Arrow2>
      </Shadow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 700px;
`;
const Shadow = styled.div`
  position: relative;
  top: -200px;
  height: 200px;
  width: 100%;
  /* background-color: black; */
  background: linear-gradient(0deg, black, hsla(0, 0%, 8%, 0));
`;

const BlinkAnimation = keyframes`
0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Arrow1 = styled.div`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  transform: rotate(90deg);
  font-size: 40px;
  top: 50%;
  left: 50%;
  animation: ${BlinkAnimation} 2s infinite;
  animation-delay: 0.2s;
`;

const Arrow2 = styled(Arrow1)`
  top: 40%;
  animation: ${BlinkAnimation} 2s infinite;
`;
