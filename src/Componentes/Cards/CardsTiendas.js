import { Link } from "react-router-dom";
const Tiendas = (props) => {
  const background = {
    background: `${props.bg}`,
  };

  const styleImg = {
    objectFit: "cover",
    borderRadius: "20px",
  };
  return (
    <div className="Efectcursor">
      <Link
        to={`/edit/tienda/${props.id}`}
        type="button"
        className="btn btn-outline"
      >
        <div
          className="card  animate__animated animate__bounceInUp p-2 m-2 min-width-300 max-width-400"
          style={background}
        >
          <img src={props.img} style={styleImg} />
          <div className=" card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="Cardscolor card-text">{props.children}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Tiendas;
