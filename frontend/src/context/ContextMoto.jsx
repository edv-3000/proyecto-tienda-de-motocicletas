import { Children, createContext, useContext, useState, } from "react"
import axios from "axios"
import { contextToken } from "./ContextToken"


export const ContextMoto = createContext()

export const MotoProvider = ({ children }) => {

    const {usarToken} = useContext(contextToken)
    const [motos, setMotos] = useState([])
    const [moto, setMoto] = useState([])

    const GetMotos = async () => {
        const respuesta = await axios.get("https://long-way-backend.onrender.com/motos")
        setMotos(respuesta.data)

    }

    const GetMoto = async (id) => {
        try {
            const respuesta = await axios.get(`https://long-way-backend.onrender.com/moto/${id}`);
            console.log("Moto recibida:", respuesta.data);
            setMoto(respuesta.data[0]);
        } catch (error) {
            console.error("error al obtener la moto:")
        }

        

    }

    const eliminarMoto = async (id,estado) => {
    try {
        await axios.put(
            `https://long-way-backend.onrender.com/motos/eliminar/${id}`,{ estado }, usarToken)

        await GetMotos()

    } catch (error) {
        console.error("Error al eliminar la moto:", error)
    }   
}

const modificarMoto = async (id, datos) => {
    try {
        const respuesta = await axios.put(
            `https://long-way-backend.onrender.com/motos/modificar/${id}`,
            datos,
            usarToken
        )

        await GetMotos()

        return respuesta.data

    } catch (error) {
        console.error("Error al modificar la moto:", error)
        throw error
    }
}
    return (
        <ContextMoto.Provider value={{ GetMoto, GetMotos, moto, motos, eliminarMoto,modificarMoto }}>
            {children}
        </ContextMoto.Provider>
    );

}


export default MotoProvider