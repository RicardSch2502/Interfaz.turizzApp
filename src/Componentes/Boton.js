import React from "react";

export default function Boton(props) {
  const icon = {
    fontSize: "60px",
    color: "#2a2a2a",
  };

  return (
    <button
      type="button"
      className="btn d-block animate__animated animate__fadeInUpBig"
      onClick={() => (window.location.href = `${props.to}`)}
    >
      <i style={icon} className={`bx ${props.icon}`}></i>
    </button>
  );
}

//bx bx-right-arrow-circle
