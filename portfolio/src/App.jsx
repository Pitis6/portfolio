import { NavBarContainer } from "./components/header/NavbarContainer";
import { Scene } from './components/Scene'
import { GlobalStyle } from './components/common/CommonStyles'
import RandomContainer from "./components/randomProyects/RandomContainer";
import { FooterContainer } from "./components/footer/FooterContainer";
export default function App() {
  return (
    <>
      <NavBarContainer/>
      <Scene/>
      <RandomContainer/>
      <FooterContainer/>
      <GlobalStyle />

    </>
  );
}

