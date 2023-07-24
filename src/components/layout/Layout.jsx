import { Outlet } from "react-router-dom"
import { FooterContainer } from "../footer/FooterContainer"
import { NavBarContainer } from "../header/NavbarContainer"
import { GlobalStyle } from "../common/CommonStyles"

export const Layout = () => {
  return (
    <>
    <NavBarContainer/>
    <Outlet/>
    <FooterContainer/>
    <GlobalStyle/>
    </>
  )
}
