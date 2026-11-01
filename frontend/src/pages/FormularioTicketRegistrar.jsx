import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextMoto } from "../context/ContextMoto";
import { useEffect } from "react";

const FormularioTicketRegistrar = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const { id } = useParams()
    const moto_id = id
    const { moto, GetMoto } = useContext(ContextMoto)

    useEffect(() => {
        GetMoto(id)
    }, [])

    const obtenerDatos = async (e) => {
        e.preventDefault()

        const ticket = {
            nombre, correo, telefono, id_moto: Number(id), precio: moto.precio, categoria: moto.categoria,
            estado: "en proceso", tipo_compra : ""};

        
           try {
            const respuesta = await axios.post("http://localhost:3000/ticket/agregar", ticket);
alert(`Ticket registrado con éxito. Su número de ticket es: ${respuesta.data.id}`);
           } catch (error) {console.log("error al enviar ticket")
            alert("error al enviar ticket")
           } 
        
        console.log(ticket);
    };

    return (
        <form onSubmit={obtenerDatos}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />

            <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

            <button type="submit">Generar ticket</button>
        </form>
    );
};

export default FormularioTicketRegistrar;