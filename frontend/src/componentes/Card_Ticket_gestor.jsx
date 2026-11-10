import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { contextTicket } from "../context/contextTicket"

const CardTicketGestor = ({ estado }) => {

    const { tickets, GetTickets } = useContext(contextTicket)
    const navigate = useNavigate()

    useEffect(() => {
        GetTickets()
    }, [])

    const ticketsFiltrados = tickets.filter(ticket => ticket.estado === estado)

    return (
        <><div className="main">
            {ticketsFiltrados.map(ticket => (
                <div className="card border-dark mb-3" style={{ maxWidth: "22rem" }} key={ticket.id}>
                    <div className="card-header bg-dark text-white">
                        TICKET N.º {ticket.id}
                    </div>
                    <div className="card-body">
                        <p className="card-text mb-2">Nombre: {ticket.nombre}</p>
                        <p className="card-text mb-2">Correo: {ticket.correo}</p>
                    </div>
                    <div className="card-footer bg-transparent border-dark">
                        <p className="mb-2">Estado: {ticket.estado}</p>
                        <button className="btn btn-dark w-100" onClick={() => navigate(`/gestor/tickets-motos/ticket/${ticket.id}`)} > Revisar </button>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default CardTicketGestor