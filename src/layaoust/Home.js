import Axios from "../Caxios/Axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import Secciones from "../Componentes/Secciones";

function Home() {
  const [dataCategoria, setDataCategoria] = useState([]);

  const obtenerCategorias = async () => {
    const categorias = await Axios.get("/categoria/consultar");
    setDataCategoria(categorias.data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);
  return (
    <>
      <div
        style={{ height: "93vh" }}
        className="d-flex flex-column align-items-center"
      >
        <div className="d-flex flex-column align-items-center">
          <h1>TurizzApp</h1>
          <p>Aqui podras encontrar las tiendas que puedes visitar </p>
        </div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide w-75 h-25 border animate__animated animate__bounceInUp"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={logo}
                height="300px"
                class="d-block w-100 image"
                alt="..."
              />
            </div>
            {dataCategoria.length > 0 &&
              dataCategoria.map((categoria) => (
                <div className="carousel-item ">
                  <img
                    src={categoria.imagen}
                    alt="imagen"
                    height="300px"
                    className="image mx-auto d-block shadow"
                  />
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
        <Secciones />
      </div>
    </>
  );
}

export default Home;
