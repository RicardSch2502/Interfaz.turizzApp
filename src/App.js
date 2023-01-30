/* import logo from "./logo.svg";
import Secciones from "./Componentes/Secciones";
import Iconos from "./Componentes/Iconos"; */
import Rutas from "./Servicios/Rutas";
import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
