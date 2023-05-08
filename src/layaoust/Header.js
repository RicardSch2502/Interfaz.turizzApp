/*const Header = (props) => {
  return <div className="App-header text-center">{props.children}</div>;
};

export default Header;*/
import Axios from "../Caxios/Axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Boton from "../Componentes/Boton";

function Header({ setCategoria, setIdCategoria }) {
  const location = useLocation().pathname;
  console.log(location);
  const [dataCategoria, setDataCategoria] = useState([]);

  const obtenerCategorias = async () => {
    const categorias = await Axios.get("/categoria/consultar");
    setDataCategoria(categorias.data);
  };
  let rol = localStorage.getItem("rol");

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <div className="Main">
      <div className="d-flex justify-content-center align-items-center sticky-top ">
        <div
          className="animate__animated animate__bounceInUp border shadow rounded-pill m-auto bg-white w-75 bg-opacity-75 d-flex"
          style={{ height: "7vh" }}
        >
          <div className="d-flex justify-content-start w-25">
            <Boton to={-1} icon="bx-left-arrow-circle" />
            <Boton to={1} icon="bx-right-arrow-circle" />
            <Boton to={"/menu"} icon="bx-home" />
            <Boton to={"/menu"} icon="bx-home-add-fill" />
          </div>
          <div className="flex-fill d-flex justify-content-evenly">
            <div className="dropdown justify-content-end">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Filtrar categorias
              </button>
              <ul className="dropdown-menu text-center">
                {dataCategoria.map((el) => {
                  return (
                    <li>
                      <Link to={`/Tiendas/${el._id}`}>
                        {el.nombre_categoria}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {rol === "administrador" && (
              <Link type="button" to="/edit/categorias">
                <button className="btn">Administrar categorias</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Carrusel */}

      <Outlet></Outlet>
    </div>
  );
}

export default Header;
