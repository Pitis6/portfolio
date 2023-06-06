import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

export const Scene = () => {
  return (
    <Wrapper>
      <Spline scene="https://prod.spline.design/jpiX7NUyiQB29gP7/scene.splinecode"/>
      <Shadow>
        <Arrow>{`>>`}</Arrow>
      </Shadow>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height:700px;
`
const Shadow = styled.div`
position: relative;
top: -200px;
height: 200px;
width: 100%;
/* background-color: black; */
background: linear-gradient(0deg,black,hsla(0,0%,8%,0));
`
const Arrow = styled.div`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  transform: rotate(90deg);
  font-size: 40px;
  top: 50%;
  left: 50%;
`;

