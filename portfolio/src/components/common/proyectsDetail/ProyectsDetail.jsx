import styled from "styled-components";
import { Button, P, Title3 } from "../CommonStyles";
import { useState } from "react";

export const ProyectsDetail = ({ proyects }) => {
  const [proyectIndex, setProyectIndex] = useState(0);

  const handleClick = (value) => {
    setProyectIndex(proyectIndex + value);
  };

  return (
    <Wrapper>
      <Image src={proyects[proyectIndex].image} />
      <ArrowDiv>
        {proyectIndex === 0 ? (
          <Arrow
            style={{ visibility: "hidden" }}
            onClick={() => handleClick(1)}
          >{`<`}</Arrow>
        ) : (
          <Arrow onClick={() => handleClick(-1)}>{`<`}</Arrow>
        )}
        {proyectIndex === proyects.length - 1 ? (
          <Arrow
            style={{ visibility: "hidden" }}
            onClick={() => handleClick(1)}
          >{`<`}</Arrow>
        ) : (
          <Arrow onClick={() => handleClick(1)}>{`>`}</Arrow>
        )}
      </ArrowDiv>
      <Description>
        <Information>
          <Title3 style={{ marginTop: "0px" }}>{proyects[proyectIndex].title}</Title3>
          <P>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            ab neque inventore, necessitatibus eum, repellendus sequi laborum
            porro perspiciatis facilis corporis autem, laboriosam molestias
            consectetur. Hic facere cumque porro qui.
          </P>
        </Information>
        <ButtonContainer>
          <Button>Visit web site</Button>
        </ButtonContainer>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  z-index: -1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const ArrowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`;
const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, 0.03);
  width: 52px;
  height: 52px;
  border: solid 1px hsla(0, 0%, 100%, 0.4);
  font-size: 30px;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    background: hsla(0, 0%, 100%, 0.05);
  }
  &:active {
    transform: scale(1.1);
  }
`;

const Description = styled.section`
  display: flex;
  /* border: solid 1px green; */
  justify-content: space-between;
`;
const Information = styled.div`
  max-width: 700px;
  /* border: solid 1px purple; */
`;
const ButtonContainer = styled.div`
  /* border: solid 1px; */
`;
