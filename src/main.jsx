import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
// import App from './App.jsx'
import { routes } from './routes';
import './index.css'
import { MyContextProvider } from './context/Context';


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MyContextProvider>
      <RouterProvider router={routes} />
    </MyContextProvider>
  </>
);
