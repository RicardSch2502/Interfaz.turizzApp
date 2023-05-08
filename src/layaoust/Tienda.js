import Axios from "../Caxios/Axios";
import React, { useEffect, useState } from "react";
import { url } from "../Caxios/Axios";
import { useParams } from "react-router-dom";

import { TileLayer } from "react-leaflet/TileLayer";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";

const Tienda = () => {
  const [dataTienda, setDataTienda] = useState();
  const { idTienda } = useParams();

  useEffect(() => {
    obtenerTienda();
  }, []);

  const obtenerTienda = async () => {
    const tienda = await Axios.get(`/tienda/consultar/${idTienda}`);
    console.log(tienda);
    setDataTienda(tienda.data);
  };
  return (
    <div>
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
              <img src={`${url}/${dataTienda.imagen}`} alt="img" />
            </div>
          </div>
        </div>
      )}
      <div
        className="d-flex border position-relative"
        style={{ width: "200px", height: "200px" }}
      >
        <Map />
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
};

export default Tienda;
