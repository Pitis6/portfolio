import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
// import App from './App.jsx'
import { routes } from './routes';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <RouterProvider router={routes}/>
 </>
)
