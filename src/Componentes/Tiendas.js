import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Caxios/Axios";
import CardsTiendas from "../Componentes/Cards/CardsTiendas";
import Boton from "./Boton";

export default function Tiendas(props) {
  const [dataTiendas, setDatatiendas] = useState([]);

  const { idCategoria } = useParams();

  const consultartiendas = async () => {
    const tiendas = await axios.get(`tienda/consultarUno/${idCategoria}`);
    setDatatiendas(tiendas.data);
  };

  useEffect(() => {
    consultartiendas();
    console.log(dataTiendas);
    localStorage.setItem("idcategoria", idCategoria);
  }, []);

  useEffect(() => {
    console.log(dataTiendas);
  }, []);

  return (
    <div className="">
      <div>
        <Boton icon="bx-left-arrow-circle" to="/menu" />
      </div>
      <h2 className="Colortext text-center animate__animated animate__bounceInUp">
        <font>{props.categoria}</font>
      </h2>

      <div class="d-flex flex-wrap justify-content-center align-items-stretch align-content-stretch">
        {dataTiendas.map((tienda, index) => (
          <CardsTiendas
            key={index}
            id={tienda._id}
            img={tienda.imagen}
            title={tienda.nombre}
            bg={tienda.color}
          >
            {tienda.descripcion}
          </CardsTiendas>
        ))}
        <Link
          type="button"
          to={`/registrar/tienda/${idCategoria}`}
          className=" Butcolor btn btn-primary  card  animate__animated animate__bounceInUp p-2 m-2 min-width-300 max-width-400"
        >
          <div className="d-flex card-body alert-dark">
            <div className="m-auto">
              <h5 class="card-title text-center">Añadir nuevo elemento</h5>
              <p class="card-text text-center">
                <i
                  className="bx bxs-file-plus"
                  style={{ fontSize: "100px" }}
                ></i>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
