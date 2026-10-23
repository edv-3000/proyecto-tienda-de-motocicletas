import { useState } from "react";

const FormularioTicketRegistrar = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    const obtenerDatos = (e) => {
        e.preventDefault();

        const ticket = [nombre, correo, telefono];

        console.log(ticket);
    };

    return (
        <form onSubmit={obtenerDatos}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}onChange={(e) => setNombre(e.target.value)} />

            <input
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />

            <input
                type="tel"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />

            <button type="submit">Generar ticket</button>
        </form>
    );
};

export default FormularioTicketRegistrar;