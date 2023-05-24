import { NavBarContainer } from "./components/header/NavbarContainer";
import { Scene } from './components/Scene'
import { GlobalStyle } from './components/common/CommonStyles'
import { MenuContainer } from "./components/common/leftMenu/MenuContainer";
import RandomContainer from "./components/randomProyects/RandomContainer";
export default function App() {
  return (
    <>
      <NavBarContainer/>
      <Scene/>
      <RandomContainer/>
      <GlobalStyle />

    </>
  );
}

