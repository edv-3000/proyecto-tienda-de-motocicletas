import Carta_moto_id from "../componentes/Carta_moto_id";
import { useEffect } from "react";
import { useState } from "react";


const Moto =()=>{

    const[moto,setMoto] = useState([])
    const[color,setColor]= useState([])

    useEffect(()=>{

        const cargarmoto=async()=>{
            const resmoto = await fetch(`http://localhost:3000/moto/${id}`)
            const datamoto = await resmoto.json()
            setMoto(datamoto)

            const rescolor = await fetch(`http://localhost:3000/moto/color/${id}`)
            const datacolor = await rescolor.json()
            setColor(datacolor)

        }
        cargarmoto()
    },[])
 
    return(
        <>
        <Carta_moto_id moto={moto} color={color}/> 
        </>
    )
}

export default Moto