import { useEffect, useState } from "react";
import axios from "../Caxios/Axios";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
const TableCategoria = () => {
  const [dataCategoria, setDataCategoria] = useState([]);

  const obtenerCategorias = async () => {
    const categorias = await axios.get("/categoria/consultar");
    setDataCategoria(categorias.data);
  };

  const eliminar = async (id) => {
    let result = window.confirm("Eliminaras este elemento");
    if (result) {
      await axios.delete(`/categoria/eliminar/${id}`);
      window.location.reload();
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Leyenda</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {dataCategoria.map((categoria, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{categoria.nombre_categoria}</td>
              <td>{categoria.subtitulo}</td>
              <td>
                <Link to={`/edit/categorias/${categoria._id}`}>
                  <button className="btn btn-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminar(categoria._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline d-block mx-auto my-2">
        <Link
          type="button"
          className="Butcolor btn btn-primary"
          to="/registrar/categoria"
        >
          Añadir
        </Link>
      </button>
      <button className="d-block mx-auto btn btn-outline my-2">
        <Link type="button" className="Butcolor btn btn-primary" to="/menu">
          Inicio
        </Link>
      </button>
    </>
  );
};

export default TableCategoria;
