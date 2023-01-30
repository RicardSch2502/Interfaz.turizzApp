import React from "react";
import Boton from "./Boton";
import qw from "../imagenes/qw.png";

function Header() {
  return (
    <header className="d-flex vh-100">
      <div className="m-auto">
        <img
          src={qw}
          width={300}
          className=" mx-auto d-block animate__animated animate__bounceInUp"
          alt="logo_turizzapp"
        />
        <h1 className="Colortext animate__animated animate__bounceInUp">
          Bienvenidos a TurizzApp
        </h1>
        <div className="d-flex justify-content-center">
          <Boton to="/menu" icon="bx-right-arrow-circle" />
        </div>
      </div>
    </header>
  );
}

export default Header;
