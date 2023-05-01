import Axios from "../Caxios/Axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tienda = () => {
  const [dataTienda, setDataTienda] = useState();
  const { idTienda } = useParams();

  useEffect(() => {
    obtenerTienda();
  });

  const obtenerTienda = async () => {
    const tienda = await Axios.get(`/tienda/consultar/${idTienda}`);
    console.log(tienda);
    setDataTienda(tienda.data);
  };
  return (
    <>
      {" "}
      {dataTienda && (
        <div>
          <div>
            <h1 className="bg-secondary p-4 text-center">
              {dataTienda.nombre}
            </h1>
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <p>
                {" "}
                <span className="fw-bold">Descripcion: </span>{" "}
                {dataTienda.descripcion}
              </p>
              <p>
                <span className="fw-bold">Calle: </span>
                {dataTienda.calle}
              </p>
              <p>
                <span className="fw-bold">Colonia: </span>
                {dataTienda.colonia}
              </p>
              <p>
                <span className="fw-bold">C.P. </span>
                {dataTienda.codigoPostal}
              </p>
              <p>
                <span className="fw-bold">Estado: </span>
                {dataTienda.estado}
              </p>
            </div>
            <div>
              <img src={dataTienda.imagen} alt="img" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tienda;
