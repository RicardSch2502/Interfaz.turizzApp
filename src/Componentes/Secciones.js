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
  console.log(dataCategoria);

  return (
    <>
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
    </>
  );
}
