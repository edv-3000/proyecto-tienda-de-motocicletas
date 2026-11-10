import { useContext } from "react"
import { contextToken } from "../context/ContextToken"
import { useNavigate } from "react-router"

const CerrarSesion=()=>{

    const { eliminarToken,redirigir} = useContext(contextToken)
    const navigate = useNavigate()

    const CerrarSesion=()=>{
        eliminarToken()
        redirigir()
    }

    return(<>
    <div className="mb-3 d-flex justify-content-center align-items-center ">
        <button onClick={CerrarSesion} type="button" className="btn btn-outline-danger btn-sm">cerrar sesion</button>
   </div>
    </>)
}

export default CerrarSesion