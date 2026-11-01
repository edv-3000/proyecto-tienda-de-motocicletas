import { useState } from "react"
import axios from "axios"


const Login =()=>{
    
    const [usuario,setUsuario]= useState("")
    const [contraseña,setContraseña]= useState("")
    const [token,setToken] = (null)
    const [rol,setRol] = (null)
    const [userRes, setuserRes] = (null)

    const user ={usuario,contraseña}

    const enviaruser=async()=>{

        const enviar = await axios.post("http://localhost:3000/gestor/login",user)
        setToken(enviar.data.token)
        setuserRes(enviar.data.usuario)
        setRol(enviar.data.rol)
        
        const tokenuser = {token,userRes,rol}

    }

    return(<>
<div className="container d-flex justify-content-center">
    <div className="card shadow-sm p-4 my-5" style={{ width: "100%", maxWidth: "380px" }}>
        <div className="card-body">
            <h3 className="text-center mb-4">Iniciar sesión</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="contrasena" className="form-label">Contraseña</label>
                    <inputn type="password" className="form-control" id="contrasena" onChange={(e) => setContraseña(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Iniciar sesión
                </button>
            </form>
        </div>
    </div>
</div>

</>)
}



export default Login