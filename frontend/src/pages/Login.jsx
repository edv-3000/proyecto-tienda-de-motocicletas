import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { contextToken } from "../context/ContextToken"



const Login =()=>{
    const navigate = useNavigate()
    const {obtenerToken} = useContext(contextToken)
    
    const [usuario,setUsuario]= useState("")
    const [contrasena,setContrasena]= useState("")

    const user ={usuario,contrasena}

    const enviaruser=async()=>{
       
        

        if(usuario === "" || contrasena === ""){
            alert("todos los campos deben ser llenados")
            return
        }
        try {
             const enviar = await axios.post("https://long-way-backend.onrender.com/gestor/login",user)
            
            if(enviar.data.token){
                obtenerToken(enviar.data.token)
                console.log(enviar.data.rol)
                if(enviar.data.rol === "admin"){
                    alert(enviar.data.rol)
                    navigate("/gestor/admin")
                }else{
                    navigate("/gestor/tickets-motos")

                }
                alert(`bienvenido ${enviar.data.usuario}`) 
            }
             


        } catch (error) {
            if(error.response?.status === 401){
                alert("usuario o contraseña incorrecto")
            }else if(error.request){
                alert("error en la conexion")
            }        
        }

    }

    return(<>
    <div style={{minHeight : "100vh"}} className="d-flex justify-content-center align-items-center">
<div className="container d-flex justify-content-center align-items-center">
    <div className="card shadow-sm p-4 " style={{ width: "100%", maxWidth: "380px" }}>
        <div className="card-body">
            <h3 className="text-center mb-4">Iniciar sesión</h3>
            <form onSubmit={enviaruser}>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="contrasena" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contrasena" onChange={(e) => setContrasena(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary w-100"  >
                    Iniciar sesión
                </button>
            </form>
        </div>
    </div>
</div>
</div>
</>)
}



export default Login