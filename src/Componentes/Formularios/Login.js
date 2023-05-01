import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "../../Caxios/Axios";

const stylo = {
  marginTop: "190px",
};
/*async function enviar (event){
    try {
        mostrar_datos(event)
        const insertar = await Axios.post("/usuario/insertar",body)
         console.log(insertar)
        navige("/logins")
    } catch (error) {
        console.log(error)
    }
   
}*/

const Login = () => {
  const [body, setBody] = useState(null);
  const [errorlogin, seterrorlogin] = useState(null);

  const navige = useNavigate();

  const handle = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  async function enviar(event) {
    try {
      mostrar_datos(event);
      const insertar = await Axios.post("/usuario/login", body);
      console.log(insertar);
      let rol = insertar.data[0].rol;
      console.log(rol);
      localStorage.setItem("rol", rol);
      navige("/menu");
    } catch (error) {
      console.log(error);
      seterrorlogin(error.response.data.mensage);
      setTimeout(() => {
        seterrorlogin(null);
      }, 1000);
    }
  }

  function mostrar_datos(event) {
    event.preventDefault();
    console.log(body);
  }

  return (
    <div>
      <div className="w-25 mx-auto" style={stylo}>
        <form onSubmit={enviar}>
          <div>
            <label className="form-label">usuario</label>
            <input
              className="form-control"
              type="text"
              placeholder="usuario"
              name="usuario"
              autoComplete="off"
              required
              onChange={handle}
            />
          </div>
          <div>
            <label className="form-label">contraseña</label>
            <input
              className="form-control"
              type="password"
              placeholder="contraseña"
              name="password"
              required
              onChange={handle}
            />
            <div>
              <button
                className="btn btn-success mt-2 d-block m-auto"
                onClick={() => navige("/Formulariologin")}
              >
                crear cuenta nueva
              </button>
            </div>
          </div>
          <div>
            <button className="btn btn-success mt-4 d-block m-auto">
              iniciarSesion
            </button>
            {errorlogin && <h1>{errorlogin}</h1>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
