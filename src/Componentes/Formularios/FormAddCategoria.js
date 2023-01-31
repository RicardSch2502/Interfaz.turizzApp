import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Caxios/Axios";
const FormAddCategoria = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();

  const handle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = (e) => {
    e.preventDefault();
    console.log(data);
    enviarDatos();
  };

  const enviarDatos = async () => {
    axios
      .post("/categoria/insertar/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/edit/categorias");
  };

  return (
    <div>
      <center className="Antext m-auto mt-5">
        <h4 className="mb-5">Agregar Categoria </h4>
        <form onSubmit={enviar}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="Colortext form-label">
              Nombre Categoria
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              name="nombre_categoria"
              autoComplete="off"
              onChange={handle}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="Colortext form-label">
              Subtitulo
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              name="subtitulo"
              autoComplete="off"
              onChange={handle}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="Colortext form-label">
              Imagen
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              name="imagen"
              autoComplete="off" //autocompletado
              onChange={handle}
            />
          </div>

          <button type="submit" class="Butcolor btn btn-primary">
            Añadir
          </button>
        </form>
      </center>
    </div>
  );
};

export default FormAddCategoria;
