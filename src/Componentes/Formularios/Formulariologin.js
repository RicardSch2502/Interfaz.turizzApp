import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Formulariologin = () => {
    const [show, setShow ] = useState("")
    const [body,setBody]=useState(null)
    const stylo = {
        marginTop:"150px"
    }

    const navige = useNavigate()

    function handleshow(e){
        console.log(e.target.value)
        setShow(e.target.value)
    }

    const handle = (e)=> {
        setBody({...body,[e.target.name]:e.target.value})
    }

  return (
    <div>
      <div>
        <div className ="w-25 mx-auto" style={stylo} >
            <form onSubmit={()=>navige("/menu")}>
                
                    <div>
                    <div>
                    <label className ="form-label">
                        nombre de usuario
                    </label>
                    <input className="form-control" type="text" placeholder="nombre de usuario" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        correo electronico
                    </label>
                    <input className="form-control" type="text" placeholder="correo electronico" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        password
                    </label>
                    <input className="form-control" type="password" placeholder="password" required onChange={handle}/>
                <div>
                    <label className ="form-label">
                        confirm password
                    </label>
                    <input className="form-control" type="password" placeholder="confirm password" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        rol
                    </label>
                    <select className = "form-select" onChange={handleshow}  >
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
                        nombre de usuario
                    </label>
                    <input className="form-control" type="text" placeholder="nombre de usuario" required onChange={handle}/>
                </div>
                <div>
                    <label className ="form-label">
                        edad
                    </label>
                    <input className="form-control" type="number" placeholder="edad" required onChange={handle}/>
                </div>
                    </>
                    }
                    
                </div>
                    <button className ="btn btn-success mt-2 d-block m-auto" >
                        iniciarSesion
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
