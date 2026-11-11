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
            estado: "en proceso", tipo_compra: ""
        };

        if (nombre === "" || correo === "" || telefono === "") {
            alert("todos los campos deben estar llenos para poder generar el ticket")
            return
        }


        try {
            const respuesta = await axios.post("https://long-way-backend.onrender.com/ticket/agregar", ticket);
            console.log(respuesta.data);
            alert(`Ticket registrado con éxito. Su número de ticket es: ${respuesta.data.id}`);
        } catch (error) {
            console.log("error al enviar ticket")
            alert("error al enviar ticket")
        }

        console.log(ticket);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-dark text-white text-center py-3">
                            <h4 className="mb-0">registrar consulta</h4>
                        </div>
                        <div className="card-body p-4">
                            <p className="text-muted text-center mb-4">ingresa tus datos para poder contactarnos contigo</p>
                            <form onSubmit={obtenerDatos}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                                </div>

                                <div className="mb-4">
                                    <input type="text" className="form-control" placeholder="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark py-2">Generar ticket</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormularioTicketRegistrar;