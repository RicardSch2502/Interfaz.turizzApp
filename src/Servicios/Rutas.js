import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Secciones from "../Componentes/Secciones";
import Header from "../Componentes/Header";
import "../App.css";
import Tiendas from "../Componentes/Tiendas";
import RegistrarTienda from "../Componentes/RegistrarTienda";
import NotFound from "../Componentes/NotFound";
import FormEditTienda from "../Componentes/Formularios/FormEditTienda";
import TableCategoria from "../Componentes/TableCategoria";
import FormEditCategoria from "../Componentes/Formularios/FormEditCategoria";
import FormAddCategoria from "../Componentes/Formularios/FormAddCategoria";
import Login from "../Componentes/Formularios/Login";
import Formulariologin from "../Componentes/Formularios/Formulariologin";

export default function Rutas() {
  const [categoria, setCategoria] = useState();
  const [idcategoria, setIdCategoria] = useState();
  return (
    <Routes>
      <Route exact path="/" element={<Header />} />
      <Route exact path="*" element={<NotFound />} />
      <Route
        exact
        path="/Tiendas/:idCategoria"
        element={<Tiendas categoria={categoria} />}
      />
      <Route
        path="/menu"
        exact
        element={
          <Secciones
            setCategoria={setCategoria}
            setIdCategoria={setIdCategoria}
          />
        }
      />
      <Route
        path="/Formulariologin"
        exact
        element={<Formulariologin/>}
      />
      <Route
        path="/logins"
        exact
        element={<Login/>}
      />
      <Route
        path="/registrar/tienda/:idCategoria"
        exact
        element={<RegistrarTienda />}
      />
      <Route path="/registrar/categoria" exact element={<FormAddCategoria />} />
      <Route path="/edit/tienda/:idTienda" exact element={<FormEditTienda />} />
      <Route path="/edit/categorias" exact element={<TableCategoria />} />
      <Route
        path="/edit/categorias/:idCategoria"
        exact
        element={<FormEditCategoria />}
      />
    </Routes>
  );
}
