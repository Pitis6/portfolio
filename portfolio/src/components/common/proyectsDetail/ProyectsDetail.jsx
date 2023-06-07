import styled from "styled-components";
import { Button, P, Title3 } from "../CommonStyles";
import { useContext, useState } from "react";
import { MyContext } from "../../../context/Context";

export const ProyectsDetail = ({ proyects }) => {
  //consumir el indice del context e inicializar el estado.
  const value = useContext(MyContext);
  const [proyectIndex, setProyectIndex] = useState(value.proyectIndex);

  const handleClickArrow = (value) => {
    setProyectIndex(proyectIndex + value);
  };

  const handleClickButton = () => {
    event.preventDefault();
    window.open(proyects[proyectIndex].url, "_blank");
  };

  return (
    <Wrapper>
      <Image src={proyects[proyectIndex].image} />
      <ArrowDiv>
        {proyectIndex === 0 ? (
          <Arrow
            style={{ visibility: "hidden" }}
            onClick={() => handleClickArrow(1)}
          >{`<`}</Arrow>
        ) : (
          <Arrow onClick={() => handleClickArrow(-1)}>{`<`}</Arrow>
        )}
        {proyectIndex === proyects.length - 1 ? (
          <Arrow
            style={{ visibility: "hidden" }}
            onClick={() => handleClickArrow(1)}
          >{`<`}</Arrow>
        ) : (
          <Arrow onClick={() => handleClickArrow(1)}>{`>`}</Arrow>
        )}
      </ArrowDiv>
      <Description>
        <Information>
          <Title3 style={{ marginTop: "0px" }}>
            {proyects[proyectIndex].title}
          </Title3>
          <P>{proyects[proyectIndex].description}</P>
        </Information>
        <ButtonContainer>
          <Button onClick={handleClickButton}>Visit web</Button>
        </ButtonContainer>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: solid; */
  height: 100%;
  z-index: -1;
`;
const Image = styled.img`
  width: 90%;
  /* height: 100%; */
  border-radius: 16px;
`;

const ArrowDiv = styled.div`
  /* border: solid; */
  display: flex;
  gap: 30px;
  justify-content: center;
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
  width: 90%;
  display: flex;
  /* border: solid 1px green; */
  justify-content: space-between;
`;
const Information = styled.div`
  max-width: 700px;
  /* border: solid 1px purple; */
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-right: 100px;
  /* border: solid 1px; */
  align-items: center;
`;
