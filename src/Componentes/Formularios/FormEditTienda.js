import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../Caxios/Axios";
import estados from "../../assets/Estados.json";
import municipio from "../../assets/Municipios.json";
import Boton from "../Boton";

const FormEditTienda = ({ idCategoria }) => {
  const [estado, setEstados] = useState(0);
  /*   const [municipios, setMunicipios] = useState("Aguascalientes"); */
  const [dataTienda, setDataTienda] = useState([]);

  const [data, setData] = useState();

  let { idTienda } = useParams();
  let navigate = useNavigate();

  const obtenerTienda = async () => {
    const tienda = await axios.get(`/tienda/consultar/${idTienda}`);
    setDataTienda(tienda.data);
    setData({
      nombre: tienda.data.nombre,
      descripcion: tienda.data.descripcion,
      calle: tienda.data.calle,
      estado: tienda.data.estado,
      municipio: tienda.data.municipio,
      colonia: tienda.data.colonia,
      codigoPostal: tienda.data.codigoPostal,
      id_categoria: tienda.data.id_categoria,
      categoria: tienda.data.categoria,
      imagen: tienda.data.imagen,
      color: tienda.data.color,
    });
  };

  const actTienda = async () => {
    await axios
      .put(`/tienda/actualizar/${idTienda}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate(`/Tiendas/${localStorage.getItem("idcategoria")}`);
  };

  useEffect(() => {
    obtenerTienda();
  }, []);

  const enviar = (e) => {
    e.preventDefault();
    actTienda();
  };

  const handle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const eliminar = async () => {
    let result = window.confirm("¿Estas seguro de esta desicion?");
    if (result) {
      await axios.delete("/tienda/eliminar/" + idTienda);
      navigate(`/Tiendas/${localStorage.getItem("idcategoria")}`);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="">
          <Boton
            to={`/Tiendas/` + localStorage.getItem("idcategoria")}
            icon="bx-left-arrow-circle"
          />
        </div>
        <form className="d-flex flex-column" onSubmit={enviar}>
          <label className="d-block my-2 w-100">
            <p>Nombre de la tienda</p>
            <input
              required={true}
              onChange={handle}
              className="w-100"
              type="text"
              name="nombre"
              defaultValue={dataTienda.nombre}
            />
          </label>
          <label className="d-block my-2 w-100">
            <p>Descripción</p>
            <textarea
              name="descripcion"
              id=""
              cols="30"
              rows="10"
              onChange={handle}
            >
              {dataTienda.descripcion}
            </textarea>
          </label>
          <label className="d-block my-2 w-100">
            <p>Calle</p>
            <input
              required={true}
              onChange={handle}
              className="w-100"
              type="text"
              name="calle"
              defaultValue={dataTienda.calle}
            />
          </label>
          <label className="d-block my-2 w-100">
            <p>Estado</p>
            <select
              name="estado"
              onChange={(e) => {
                setEstados(e.target.value);
                setData({
                  ...data,
                  [e.target.name]: estados[e.target.value].nombre,
                });
              }}
            >
              {estados.map((estado, index) => (
                <option value={index} key={index}>
                  {estado.nombre}
                </option>
              ))}
            </select>
          </label>
          <label className="d-block my-2 w-100">
            <p>Municipio</p>
            <select name="municipio" onChange={handle}>
              {Object.values(municipio)[estado].map((municipioss, index) => (
                <option key={index} value={municipioss}>
                  {municipioss}
                </option>
              ))}
            </select>
          </label>
          <label className="d-block my-2 w-100">
            <p>Colonia</p>
            <input
              required={true}
              onChange={handle}
              className="w-100"
              type="text"
              name="colonia"
              defaultValue={dataTienda.colonia}
            />
          </label>
          <label className="d-block my-2 w-100">
            <p>Codigo Postal</p>
            <input
              required={true}
              onChange={handle}
              className="w-100"
              type="number"
              name="codigoPostal"
              defaultValue={dataTienda.codigoPostal}
            />
          </label>
          <label className="d-block my-2 w-100">
            <p>Subir imagen</p>
            <input
              onChange={handle}
              className="w-100"
              type="text"
              name="imagen"
              defaultValue={dataTienda.imagen}
            />
          </label>
          <label className="d-block my-2 w-100">
            <p>Escoge el color de fondo de tu tienda</p>
            <input
              required={true}
              onChange={handle}
              className="w-100"
              type="color"
              name="color"
              value={dataTienda.color}
            />
          </label>
          <input
            required={true}
            onChange={handle}
            type="submit"
            value="Guardar"
          />
        </form>
      </div>
      <button
        className="position-absolute bottom-0 ms-5 btn btn-danger"
        onClick={eliminar}
      >
        Eliminar elemento
      </button>
    </>
  );
};

export default FormEditTienda;
