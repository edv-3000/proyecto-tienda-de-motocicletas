import { useContext, useEffect, useState } from "react"
import { contextTicket } from "../context/contextTicket"

const Tickets = () => {


  const { tickets, GetTickes } = useContext(contextTicket)


  useEffect(() => {
    GetTickes()
  }, [])




  return (<>
    {tickets.map((ticket => (
<div className="card border-dark mb-3" style={{ maxWidth: "22rem" }}>
    <div className="card-header bg-dark text-white">
        TICKET N.º {ticket.id}
    </div>
    <div className="card-body">
        <h5 className="card-title mb-3">Datos del cliente</h5>
        <p className="card-text mb-2">Nombre: {ticket.nombre}</p>
        <p className="card-text mb-2">Correo: {ticket.correo}</p>
        <p className="card-text mb-2">Teléfono: {ticket.telefono}</p>
        <h5 className="card-title mt-4 mb-3">Datos de la moto</h5>
        <p className="card-text mb-2">Modelo: {ticket.modelo}</p>
        <p className="card-text mb-2">Precio: ${ticket.precio}</p>
        <p className="card-text mb-2">Tipo de compra: {ticket.tipo_compra}</p>
    </div>
    <div className="card-footer bg-transparent border-dark">
        <p className="mb-2">Estado: {ticket.estado}</p>
        <p className="mb-0">Fecha de creacion: {ticket.fecha_creacion}</p>
        {ticket.fecha_actualizacion ? <p className="mb-0">Fecha: de actualizacion {ticket.fecha_actualizacion}</p> : null}
    </div>
</div>


    )))}

  </>)
}

export default Tickets