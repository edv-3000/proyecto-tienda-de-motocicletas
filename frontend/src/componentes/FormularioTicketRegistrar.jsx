import { useState } from "react";
import axios from "axios";

const FormularioTicketRegistrar = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    const obtenerDatos = async (e) => {
        e.preventDefault()

        await axios.post("",)


        const ticket = {nombre, correo, telefono,moto_id,moto_color};

        console.log(ticket);
    };

    return (
        <form onSubmit={obtenerDatos}>
            <input type="text"  placeholder="Nombre" value={nombre}onChange={(e) => setNombre(e.target.value)} />

            <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />

            <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>

            <button type="submit" onClick={obtenerDatos}>Generar ticket</button>
        </form>
    );
};

export default FormularioTicketRegistrar;