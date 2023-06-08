import styled from "styled-components";
import { Button } from "../CommonStyles";
import { MenuItem } from "./MenuItem";
import { useNavigate } from "react-router-dom";

export const MenuContainer = () => {

  const goToContact = useNavigate()
  const items = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Proyects",
      route: "/proyects",
    },
    {
      label: "Education",
      route: "/education",
    },
    {
      label: "Skills",
      route: "/skills",
    },
  ];
  
  
  return (
    <Wrapper>
      {items.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
      <Button onClick={() => goToContact('/contact')}>Contact Me</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 68px;
  padding: 0px 20px;
  background-color: rgba(31, 32, 35, 0.5);
  backdrop-filter: blur(2px);
`;
