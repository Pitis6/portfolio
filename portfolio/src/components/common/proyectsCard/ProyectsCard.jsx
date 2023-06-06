import styled from "styled-components";
import { Button, P, Title2 } from "../CommonStyles";
import { useNavigate } from "react-router-dom";


export const ProyectsCard = ({ data, index }) => {

  const goToProyects = useNavigate()

 const handleClick = (event) => {
   event.preventDefault();
   // aca setear el context con el indice
   goToProyects('/proyects')
 };

  return (
    <Wrapper index={index}>
      <Image src={data.videoPath} alt="imagen" />
      <TextWrapper>
        <Title2>{data.title}</Title2>
        <P>{data.description}</P>
        <Button onClick={handleClick}>
            See more
        </Button>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.index % 2 === 0 ? "row-reverse" : "")};
  gap: 40px;
  width: 100%;
  border-radius: 20px;
  &:hover {
  }
`;

const Image = styled.img`
  max-width: 55%;
  height: auto;
`;

const TextWrapper = styled.div`
  height: 100%;
`;
