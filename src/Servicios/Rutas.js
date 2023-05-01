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
import Tema from "../layaoust/Header";
import Home from "../layaoust/Home";
import Tienda from "../layaoust/Tienda";

export default function Rutas() {
  const [categoria, setCategoria] = useState();
  const [idcategoria, setIdCategoria] = useState();
  let rol = localStorage.getItem("rol");
  return (
    <Routes>
      <Route exact path="/" element={<Header />} />
      <Route exact path="*" element={<NotFound />} />
      <Route
        exact
        path="/Tiendas/:idCategoria"
        element={
          <Tema setCategoria={setCategoria} setIdCategoria={setIdCategoria} />
        }
        //element={<Tiendas categoria={categoria} />}
      >
        <Route index element={<Tiendas categoria={categoria} />} />
      </Route>
      <Route
        path="/menu"
        element={
          /*<Secciones
            setCategoria={setCategoria}
            setIdCategoria={setIdCategoria}
          />*/
          <Tema />
        }
      >
        <Route index element={<Home />} />
      </Route>
      <Route path="/Formulariologin" exact element={<Formulariologin />} />
      <Route path="/logins" exact element={<Login />} />
      <Route
        path="/registrar/tienda/:idCategoria"
        exact
        element={<RegistrarTienda />}
      />
      <Route path="/registrar/categoria" exact element={<FormAddCategoria />} />
      {rol === "administrador" || rol === "vendedor" ? (
        <Route
          path="/edit/tienda/:idTienda"
          element={
            <Tema setCategoria={setCategoria} setIdCategoria={setIdCategoria} />
          }
        >
          <Route index element={<FormEditTienda />} />
        </Route>
      ) : (
        <Route
          path="/edit/tienda/:idTienda"
          element={
            <Tema setCategoria={setCategoria} setIdCategoria={setIdCategoria} />
          }
        >
          <Route index element={<Tienda />} />
        </Route>
      )}

      <Route path="/edit/categorias" exact element={<TableCategoria />} />
      <Route
        path="/edit/categorias/:idCategoria"
        exact
        element={<FormEditCategoria />}
      />
    </Routes>
  );
}
