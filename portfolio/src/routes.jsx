import { createBrowserRouter } from 'react-router-dom'
import { LayoutContainer } from "./components/layout/LayoutContainer";
import { ErrorPage } from "./components/errorPage/ErrorPage";
import RandomContainer from "./components/randomProyects/RandomContainer";
import { Home } from "./pages/Home";
import { Skills } from './pages/Skills';
// import { Scene } from "./components/Scene";

export const routes = createBrowserRouter([
  {
    key: "home",
    path: "/",
    element: <LayoutContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/proyects",
        element: <RandomContainer />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);