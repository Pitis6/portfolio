import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

export const Scene = () => {
  return (
    <Wrapper>
      <Spline scene="https://prod.spline.design/jpiX7NUyiQB29gP7/scene.splinecode"/>
      <Shadow/>
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


