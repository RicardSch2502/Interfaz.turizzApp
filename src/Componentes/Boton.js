import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Boton(props) {
  const navigate = useNavigate();
  const icon = {
    fontSize: "30px",
    color: "#2a2a2a",
  };

  return (
    <button type="button" className="btn" onClick={() => navigate(props.to)}>
      <i style={icon} className={`bx ${props.icon}`}></i>
    </button>
  );
}

//bx bx-right-arrow-circle
