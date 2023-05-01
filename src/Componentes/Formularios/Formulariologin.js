import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from '../../Caxios/Axios'

const Formulariologin = () => {
    const [show, setShow ] = useState("")
    const [body,setBody]=useState({rol:"usuario"})
    const stylo = {
        marginTop:"150px"
    }

    const navige = useNavigate()

    async function enviar (event){
        try {
            mostrar_datos(event)
            const insertar = await Axios.post("/usuario/insertar",body)
             console.log(insertar)
            navige("/logins")
        } catch (error) {
            console.log(error)
        }
       
    }

    function handleshow(e){
        console.log(e.target.value)
        setShow(e.target.value)
        setBody({...body,rol:e.target.value})
    }

    const handle = (e)=> {
        setBody({...body,[e.target.name]:e.target.value})
    }

    function mostrar_datos(event){
        event.preventDefault()
        console.log(body)
        
    }

  return (
    <div>
      <div>
        <div className ="w-25 mx-auto" style={stylo} >
            <form onSubmit={enviar}>
                
                    <div>
                    <div>
                    <label className ="form-label">
                        nombre de usuario
                    </label>
                    <input name="usuario" className="form-control" type="text" placeholder="nombre de usuario" autoComplete="off" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        correo electronico
                    </label>
                    <input name="correo" className="form-control" type="text" placeholder="correo electronico" autoComplete="off" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        password
                    </label>
                    <input name="contrasena" className="form-control" type="password" placeholder="password" required onChange={handle}/>
                <div>
                    <label className ="form-label">
                        confirm password
                    </label>
                    <input pattern={body.hasOwnProperty("contrasena")?body.contrasena : ""} name="confirpass" className="form-control" type="password" placeholder="confirm password" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        rol
                    </label>
                    <select className = "form-select" onChange={handleshow} name="rol"  >
                        <option value = "usuario">
                            usuario
                        </option>
                        <option value = "vendedor">
                            vendedor
                        </option>
                        <option value ="administrador">
                            administrador
                        </option>
                    </select>
                    {show === "vendedor" && <>
                    <div>
                    <label className ="form-label">
                        nombre completo
                    </label>
                    <input name = "nombre" className="form-control" type="text" placeholder="nombre completo" autoComplete="off" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        edad
                    </label>
                    <input name="edad" className="form-control" type="number" placeholder="edad" autoComplete="off" required onChange={handle}/>
                </div>
                    </>
                    }
                    
                </div>
                    <button className ="btn btn-success mt-2 d-block m-auto" >
                        crear cuenta
                    </button>
                </div>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Formulariologin
