import { NavBarContainer } from "./components/header/NavbarContainer";
import { Scene } from './components/Scene'
import { GlobalStyle } from './components/common/CommonStyles'
import { MenuContainer } from "./components/common/leftMenu/MenuContainer";
export default function App() {
  return (
    <>
      <Scene />
      <NavBarContainer />
      <MenuContainer/>
      <GlobalStyle />
    </>
  );
}

