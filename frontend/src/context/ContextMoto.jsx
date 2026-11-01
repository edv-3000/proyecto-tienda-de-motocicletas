    import { Children, createContext, useContext, useState, } from "react"
    import axios from "axios"

    export const ContextMoto = createContext()

    export const MotoProvider = ({children})=>{

        const [motos, setMotos] = useState([])
        const [moto,setMoto]= useState([])

        const GetMotos = async()=>{
            const respuesta = await axios.get("http://localhost:3000/motos")
            setMotos(respuesta.data)

        }

    const GetMoto = async (id) => {
    try {
        const respuesta = await axios.get(`http://localhost:3000/moto/${id}`);
        console.log("Moto recibida:", respuesta.data);
         setMoto(respuesta.data[0]);
    } catch (error) {
        console.error("error al obtener la moto:")
    }
    
};
        return (
            <ContextMoto.Provider value={{ GetMoto, GetMotos,moto,motos }}>
                {children}
            </ContextMoto.Provider>
        );

    }


    export default MotoProvider