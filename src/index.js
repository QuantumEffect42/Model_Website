import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom";
import Aircraft32 from './pages/Aircraft/32ndScale';
import Aircraft48 from './pages/Aircraft/48thScale';
import Ground35 from './pages/Ground/35thScale';
import Ground42 from './pages/Ground/42ndScale';
import MGGundams from './pages/Gundams/MG';
import RGGundams from './pages/Gundams/RG';
import Dynames from './pages/Gundams/MasterGrades/Dynames';
import RedFrameAstray from './pages/Gundams/MasterGrades/RedFrameAstray';
import WingZero from './pages/Gundams/RealGrades/WingZero';
import AH1ZViper from './pages/Aircraft/32ndScale/AH1Viper';
import F14ATomcat from './pages/Aircraft/48thScale/F14A';
import Flak88 from './pages/Ground/35thScale/Flak88';
import M1A2Abrams from './pages/Ground/35thScale/M1A2Abrams';
import M2A2Bradley from './pages/Ground/35thScale/M2A2Bradley';
import PantherG from './pages/Ground/35thScale/PantherG';
import Panzer4J from './pages/Ground/35thScale/Panzer4J';
import Tiger1 from './pages/Ground/42ndScale/Tiger1';
import OtherModels from './pages/Other/Other';
import HitachiExcavator from './pages/Other/48thScale/Excavator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/135GroundVehicles",
    element: <Ground35 />
  },
  {
    path: "/142GroundVehicles",
    element: <Ground42 />
  },
  {
    path: "/132Aircraft",
    element: <Aircraft32 />
  },
  {
    path: "/148Aircraft",
    element: <Aircraft48 />
  },
  {
    path: "/MGGundams",
    element: <MGGundams />
  },
  {
    path: "/RGGundams",
    element: <RGGundams />
  },
  {
    path: "/OtherModels",
    element: <OtherModels />
  },
  {
    path: "/Dynames",
    element: <Dynames />
  },
  {
    path: "/RedFrameAstray",
    element: <RedFrameAstray />
  },
  {
    path: "/WingZero",
    element: <WingZero />
  },
  {
    path: "/AH1ZViper",
    element: <AH1ZViper />
  },
  {
    path: "/F14ATomcat",
    element: <F14ATomcat />
  },
  {
    path: "/Flak88",
    element: <Flak88 />
  },
  {
    path: "/M1A2Abrams",
    element: <M1A2Abrams />
  },
  {
    path: "/M2A2Bradley",
    element: <M2A2Bradley />
  },
  {
    path: "/PantherG",
    element: <PantherG />
  },
  {
    path: "/Panzer4J",
    element: <Panzer4J />
  },
  {
    path: "/Tiger1Early",
    element: <Tiger1 />
  },
  {
    path: "/HitachiExcavator",
    element: <HitachiExcavator />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
