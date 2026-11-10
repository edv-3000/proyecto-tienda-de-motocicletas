import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { contextTicket } from "../context/contextTicket"
import { ContextMoto } from "../context/ContextMoto"

const TicketModificar = () => {

    const { id } = useParams()

    const { ticket, GetTicketid, ModificarTicket } = useContext(contextTicket)
    const { motos, GetMotos } = useContext(ContextMoto)

    const [datos, setDatos] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        id_moto: "",
        estado: "",
        tipo_compra: ""
    })

    const estados = ["en proceso", "a espera de stock", "rechazado", "aprobado"]

    useEffect(() => {
        GetTicketid(id)
        GetMotos()
    }, [id])

    useEffect(() => {
        if (ticket && ticket.id) {
            setDatos({
                nombre: ticket.nombre ?? "",
                correo: ticket.correo ?? "",
                telefono: ticket.telefono ?? "",
                id_moto: ticket.id_moto ?? "",
                estado: ticket.estado ?? "",
                tipo_compra: ticket.tipo_compra ?? ""
            })
        }
    }, [ticket])

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const enviar = async (e) => {
        e.preventDefault()

        await ModificarTicket(id, {
            ...datos,
            id_moto: Number(datos.id_moto)
        })

        await GetTicketid(id)
    }
    const motoSeleccionada = motos.find(moto => moto.id === Number(datos.id_moto))

    return (
        <div className="main-individual">

            <div className="card border-dark mb-3" style={{ maxWidth: "22rem" }}>

                <div className="card-header bg-dark text-white">
                    TICKET N.º {ticket.id}
                </div>

                <form onSubmit={enviar}>

                    <div className="card-body">

                        <h5 className="mb-3">Datos del cliente</h5>

                        <label>Nombre</label>
                        <input className="form-control mb-2" name="nombre" value={datos.nombre} onChange={handleChange} />

                        <label>Correo</label>
                        <input className="form-control mb-2" type="email" name="correo" value={datos.correo} onChange={handleChange} />

                        <label>Teléfono</label>
                        <input className="form-control mb-2" name="telefono" value={datos.telefono} onChange={handleChange} />

                        <h5 className="mt-4 mb-3">Datos de la moto</h5>

                        <label>Modelo</label>
                        <select className="form-select mb-2" name="id_moto" value={datos.id_moto} onChange={handleChange}>
                            {motos.map(moto => (
                                <option key={moto.id} value={moto.id}>
                                    {moto.modelo}
                                </option>
                            ))}
                        </select>

                        <p>Precio: ${motoSeleccionada?.precio ?? ticket.precio}</p>

                        <label>Tipo de compra</label>
                        <input className="form-control mb-2" name="tipo_compra" value={datos.tipo_compra} onChange={handleChange} />

                        <h5 className="mt-4 mb-3">Estado del ticket</h5>

                        {estados.map(opcion => (
                            <div className="form-check" key={opcion}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="estado"
                                    id={`${opcion}-${ticket.id}`}
                                    value={opcion}
                                    checked={datos.estado === opcion}
                                    onChange={handleChange}
                                />

                                <label className="form-check-label" htmlFor={`${opcion}-${ticket.id}`}>
                                    {opcion}
                                </label>
                            </div>
                        ))}

                        <button className="btn btn-dark w-100 mt-3" type="submit">
                            Guardar cambios
                        </button>

                    </div>
                </form>

                <div className="card-footer bg-transparent border-dark">
                    <p>Fecha de creación: {new Date(ticket.fecha_creacion).toLocaleDateString("es-CL")}</p>

                    {ticket.fecha_actualizacion && (
                        <p>Última actualización: {new Date(ticket.fecha_actualizacion).toLocaleString("es-CL")}</p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default TicketModificar