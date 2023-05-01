import { useState } from "react";
import { useParams } from "react-router-dom";
import estados from "../../assets/Estados.json";
import municipio from "../../assets/Municipios.json";
import axios from "../../Caxios/Axios";
import Boton from "../Boton";
import Modalcrear from "../Modalcrear";
import Axios from "../../Caxios/Axios";

const FormAddTienda = () => {
  const [estado, setEstados] = useState(0);
  const [idC, setIdC] = useState(null);
  const [municipios, setMunicipios] = useState("Aguascalientes");
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { idCategoria } = useParams();

  const [data, setData] = useState({
    id_categoria: idCategoria,
  });

  const enviar = (e) => {
    e.preventDefault();
    console.log(data);
    enviarDatos();
  };

  const handle = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const imgsave = (e) => {
    setImg(e.target.files[0]);
    console.log(e);
  };
  const enviarDatos = async () => {
    const datos = new FormData();
    datos.append("datos", JSON.stringify(data));
    datos.append("img", img);

    axios
      .post("/tienda/insertar", datos, {
        headers: {
          "Content-Type": "Multipart",
        },
      })
      .then((res) => {
        setIdC(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <Boton to={`/Tiendas/${idCategoria}`} icon="bx-left-arrow-circle" />
      </div>
      <form className="d-flex flex-column" onSubmit={enviar}>
        <h2 className="Colortext pt-3">Registar Una Tienda</h2>
        <label className="Colortext d-block my-2 w-100">
          <p>Nombre de la tienda</p>
          <input
            required={true}
            onChange={handle}
            className="w-100"
            type="text"
            name="nombre"
          />
        </label>
        <label className="Colortext d-block my-2 w-100">
          <p>Descripción</p>
          <textarea
            name="descripcion"
            id=""
            cols="30"
            rows="10"
            onChange={handle}
          ></textarea>
        </label>
        <label className="Colortext d-block my-2 w-100">
          <p>Calle</p>
          <input
            required={true}
            onChange={handle}
            className="w-100"
            type="text"
            name="calle"
          />
        </label>
        <label className="Colortext d-block my-2 w-100">
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
        <label className="Colortext d-block my-2 w-100">
          <p>Municipio</p>
          <select name="municipio" onChange={handle}>
            {Object.values(municipio)[estado].map((municipioss, index) => (
              <option key={index} value={municipioss}>
                {municipioss}
              </option>
            ))}
          </select>
        </label>
        <label className="Colortext d-block my-2 w-100">
          <p>Colonia</p>
          <input
            required={true}
            onChange={handle}
            className="w-100"
            type="text"
            name="colonia"
          />
        </label>
        <label className="Colortext d-block my-2 w-100">
          <p>Codigo Postal</p>
          <input
            required={true}
            onChange={handle}
            className="w-100"
            type="number"
            name="codigoPostal"
          />
        </label>
        <label className="Colortext d-block my-2 w-100">
          <p>Subir imagen</p>
          <input
            required={true}
            onChange={imgsave}
            className="w-100"
            type="file"
            name="imagen"
          />
        </label>
        <label className="Colortext d-block my-2 w-100">
          <p>Escoge el color de fondo de tu tienda</p>
          <input
            required={true}
            onChange={handle}
            className="w-100"
            type="color"
            name="color"
          />
        </label>
        <div className="Botoncrear">
          <input
            required={true}
            onChange={handle}
            type="submit"
            value="Añadir"
            to={`/Tiendas/${idCategoria}`}
            onClick={handleShow}
          />
        </div>

        {idC ? (
          <Modalcrear handleClose={handleClose} data={idC} show={show} />
        ) : (
          false
        )}
      </form>
    </div>
  );
};

export default FormAddTienda;
