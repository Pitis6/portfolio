import styled from "styled-components"
import { MenuContainer } from "../common/leftMenu/MenuContainer"

export const NavBar = () => {
  return (
    <Wrapper>
      <MenuContainer />
    </Wrapper>
  )
}

const Wrapper = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    /* padding:30px; */
    margin: 20px;
    position: fixed;
    left: 50%;
    translate: -50%;
`