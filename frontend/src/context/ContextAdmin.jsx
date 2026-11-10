import { createContext, useState, } from "react"
import { useContext } from "react"
import { contextToken } from "./ContextToken"
import axios from "axios"

export const contextAdmin = createContext()

export const AdminProvider = ({ children }) => {

const {usarToken} = useContext(contextToken)
    const [gestor, setGestor] = useState([])
    const [id, setID] = useState([])
    

    const gestores = async () => {

        const datos = await axios.get("https://long-way-backend.onrender.com/gestor/admin/gestores")
        setGestor(datos.data)
    }

    const eliminargestor = async(id)=>{
        const eliminar = await axios.delete(`https://long-way-backend.onrender.com/gestor/admin/eliminar`,{...usarToken,data :{id}})
        await gestores()
    }

    const agregargestor = async(datos)=>{
        const agregar = await axios.post("https://long-way-backend.onrender.com/gestor/admin",datos,usarToken)
        await gestores()
    }

    return <contextAdmin.Provider value={{gestor, gestores ,eliminargestor ,agregargestor}}>
        {children}
    </contextAdmin.Provider>

}