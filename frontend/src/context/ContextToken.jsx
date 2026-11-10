import { createContext} from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const contextToken = createContext()

export const TokenProvider =({children})=>{
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const obtenerToken=(token)=>{

        localStorage.setItem("token",token)
        return true
    }

    const usarToken =       
    {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const eliminarToken = () => {
    localStorage.removeItem("token")
}

const redirigir =()=>{
    const tokenactual = localStorage.getItem("token")
    tokenactual? null : navigate("/gestor/login")
}

    return(<contextToken.Provider value={{obtenerToken,eliminarToken,usarToken,redirigir}}>
        {children}
    </contextToken.Provider>)
} 