import styled from "styled-components";
import { Button } from "../CommonStyles";
import { MenuItem } from "./MenuItem";

export const MenuContainer = () => {
  return (
    <Wrapper>
      <MenuItem />
      <Button>Contact Me</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  /* margin-top: 5px; */
  border-radius: 68px;
  padding: 0px 20px;
  background-color: rgba(31, 32, 35, 0.5);
  backdrop-filter: blur(2px);
`;
