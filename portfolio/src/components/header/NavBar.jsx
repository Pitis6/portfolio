import styled from "styled-components"
import { MenuContainer } from "../common/leftMenu/MenuContainer"

export const NavBar = () => {
  return (
    <Wrapper>
      {/* <Title style={{ pointerEvents: 'none' }}>Felipe Calvache</Title> */}
      {/* <Button style={{ pointerEvents: 'none' }}>Contact</Button> */}
      <MenuContainer/>
    </Wrapper>
  )
}

const Wrapper = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:30px;
    position: fixed;
    left: calc(50% - 657px/2);
    
    /* border: solid red; */
    /* background-color: black; */
`