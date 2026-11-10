import { useState } from "react"
import CardTicketGestor from "../componentes/Card_Ticket_gestor"

const GestorTickets = () => {
    const [estado, setEstado] = useState("")
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-center gap-4">
                    <button className="btn btn-outline-warning" onClick={() => setEstado("en proceso")} type="button">en proceso</button>
                    <button className="btn btn-outline-primary" onClick={() => setEstado("a espera de stock")} type="button"> espera de stock</button>
                    <button className="btn btn-outline-danger" onClick={() => setEstado("rechazado")} type="button">rechazados</button>
                    <button className="btn btn-outline-success" onClick={() => setEstado("aprobado")} type="button"> aprobados</button>
                </div>
            </nav>
<CardTicketGestor  estado={estado} />
        </>
    )
}

export default GestorTickets