import React, { useEffect, useState } from "react";
import Boton from "./Boton";
import CardsCategorias from "./Cards/CardsCategorias";
import axios from "../Caxios/Axios";
import { Link } from "react-router-dom";
import Cards404 from "./Cards/Cards404";

export default function Secciones({ setCategoria }) {
  const [dataCategoria, setDataCategoria] = useState([]);

  const obtenerCategorias = async () => {
    const categorias = await axios.get("/categoria/consultar");
    setDataCategoria(categorias.data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <>
      <div className=" flex-row justify-content-center align-items-center animate__animated animate__bounceInUp">
        <div className="d-flex">
          <Boton to="/" icon="bx-left-arrow-circle" />
        </div>
        <h1 className="Colortext text-center  animate__animated animate__bounceInUp">
          TurizzApp
        </h1>

        <div>
          <div className="d-flex flex-wrap justify-content-center pt-5">
            {dataCategoria.length > 0 ? (
              dataCategoria.map((categoria, index) => {
                return (
                  <CardsCategorias
                    key={index}
                    num={index}
                    title={categoria.nombre_categoria}
                    subtitle={categoria.subtitulo}
                    img={categoria.imagen}
                    id={categoria._id}
                    setCategoria={setCategoria}
                  />
                );
              })
            ) : (
              <Cards404 title="Sin datos">No se encontro este recurso</Cards404>
            )}
          </div>
        </div>
        <Link type="button" to="/edit/categorias">
          <button className="m-4 btn btn-success">
            <h5>Administrar categorias</h5>
          </button>
        </Link>
      </div>
    </>
  );
}
