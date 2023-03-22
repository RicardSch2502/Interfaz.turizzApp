import React from 'react'
import { useNavigate } from 'react-router-dom'

const stylo = {
    marginTop:"190px"
}

const Login = () => {
    const navige = useNavigate()
  return (
    <div>
        <div className ="w-25 mx-auto" style={stylo}>
            <form>
                <div>
                    <label className ="form-label">
                        usuario
                    </label>
                    <input className="form-control" type="text" placeholder="usuario" required/>
                </div>
                <div>
                    <label className ="form-label">
                        contraseña
                    </label>
                    <input className="form-control" type="password" placeholder="contraseña" required/>
                    <div>
                        
                    <button className="btn btn-success mt-2 d-block m-auto" onClick={()=>navige("/Formulariologin")}>
                    crear cuenta nueva
                    </button>
                </div>
                </div>
                <div>
                    <button className ="btn btn-success mt-4 d-block m-auto">
                        iniciarSesion
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login