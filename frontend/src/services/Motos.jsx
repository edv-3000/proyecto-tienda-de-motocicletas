import Carta_moto_main from "../componentes/Carta_moto_main";

import { useEffect } from "react";
import { useState } from "react";

const Motos=()=>{

    const [motos,setMotos] = useState([])


    useEffect(()=>{
        const cargarmotos = async()=>{
            const res = await fetch("http://localhost:3000/motos")
            const data = await res.json()
            setMotos(data)
        }
        cargarmotos()
    },[])

    return(<>
<Carta_moto_main Motos={motos}/>
</>)

}

export default Motos