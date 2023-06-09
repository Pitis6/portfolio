import styled from "styled-components";
import { Title3 } from "../CommonStyles";



export const Modal = ({fields}) => {
  return <BackGround><Title3>{fields.name} thanks for your message!</Title3></BackGround>;
};

const BackGround = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 37.09%;
  padding: 20px;
  /* width: 300px;
  height: 220px; */
  background-color: rgba(12, 12, 12, 0.5);
  border: solid 1px hsla(100, 70%, 50%, 0.5);
`;
