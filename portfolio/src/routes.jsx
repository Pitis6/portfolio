import { createBrowserRouter } from 'react-router-dom'
import { LayoutContainer } from "./components/layout/LayoutContainer";
import { ErrorPage } from "./components/errorPage/ErrorPage";
import { Home } from "./pages/Home";
import { Skills } from './pages/Skills';
import { ProyectsDetailContainer } from './components/common/proyectsDetail/ProyectsDetailContainer';
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
        element: <ProyectsDetailContainer />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);