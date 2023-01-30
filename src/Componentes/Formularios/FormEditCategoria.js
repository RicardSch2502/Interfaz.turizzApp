import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../Caxios/Axios";
const FormEditCategoria = () => {
  const [dataCategoria, setDataCategoria] = useState([]);
  const [data, setData] = useState([]);

  let { idCategoria } = useParams();
  let navigate = useNavigate();

  const obtenerCategorias = async () => {
    const categorias = await axios.get("/categoria/consultar/" + idCategoria);
    setDataCategoria(categorias.data);
    setData({
      nombre_categoria: categorias.nombre_categoria,
      subtitulo: categorias.subtitulo,
      imagen: categorias.imagen,
    });
  };

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
      .put("/categoria/actualizar/" + idCategoria, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/edit/categorias");
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <form className="Antext m-auto mt-5" onSubmit={enviar}>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="Colortext form-label">
          Nombre Categoria
        </label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          name="nombre_categoria"
          defaultValue={dataCategoria.nombre_categoria}
          onChange={handle}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="Colortext form-label">
          Subtitulo
        </label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          name="subtitulo"
          defaultValue={dataCategoria.subtitulo}
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
          defaultValue={dataCategoria.imagen}
          onChange={handle}
        />
      </div>

      <button type="submit" className="m-auto d-block Butcolor btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormEditCategoria;
