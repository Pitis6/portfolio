import App from "./App";
import { createBrowserRouter } from 'react-router-dom'
import { Galery } from "./components/carousel/Galery";
// import { Scene } from "./components/Scene";

export const routes = createBrowserRouter([
    {
        "key": "home",
        "path": "/",
        "element": <App />
    },
    // {
    //     "key": "Proyects",
    //     "path": "/proyects",
    //     // "element": <Scene />
    // }
    {
        "key": "proyects",
        "path": "/proyects",
        "element": <Galery/>
    }
])