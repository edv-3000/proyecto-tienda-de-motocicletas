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

   const enviaruser = async (e) => {
    e.preventDefault();

    console.log("1. ENTRÓ EN enviaruser");

    if (usuario === "" || contrasena === "") {
        alert("Todos los campos deben ser llenados");
        return;
    }

    console.log("2. CAMPOS COMPLETADOS");

    try {
        console.log("3. ENVIANDO PETICIÓN");

        const enviar = await axios.post(
            "https://long-way-backend.onrender.com/gestor/login",
            user
        );

        console.log("4. RESPUESTA:", enviar.data);

    } catch (error) {
        console.error("ERROR LOGIN:", error);
    }
};

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