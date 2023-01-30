import { Link, useParams } from "react-router-dom";
import axios from "../../Caxios/Axios";
const CardsCategorias = (props) => {
  let changeColor;

  if (props.num % 2) {
    changeColor = "alert-warning";
  } else if (props.num % 3) {
    changeColor = "alert-danger";
  } else if (props.num % 4) {
    changeColor = "alert-info";
  }
  const { idCategoria } = useParams();
  const eliminar = async () => {
    let desicion = window.confirm(
      "¿Estas seguro de que quieres eliminar este documento?"
    );

    if (desicion) {
      await axios.delete(`/categoria/eliminar/${idCategoria}`);
    }
  };

  return (
    <div className="Efectcursor col m-2 flex-wrap min-width-300 max-width-400">
      <div
        className={`card h-100 ${changeColor} animate__animated animate__bounceInUp`}
      >
        <Link
          to={`/Tiendas/${props.id}`}
          type="button"
          className="Cardcolor btn btn-outline"
          onClick={() => {
            props.setCategoria(props.title);
          }}
        >
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <h5>
              <p className="card-text">{props.subtitle}</p>
            </h5>
            <img
              src={props.img}
              width={300}
              class="img-thumbnail mx-auto d-block"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardsCategorias;
