import { useState } from "react"
import { Card_Moto_gestor } from "../componentes/Card_Moto_Gestor"
import { useNavigate } from "react-router"

const Gestormotos = () => {
    const navigate = useNavigate()
    const [estado, setEstado] = useState(1)
    const [busqueda, setBusqueda] = useState("")

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between gap-5">
                            <button className="btn btn-outline-success" onClick={() => setEstado(1)} 
                            type="button">En venta</button>
                            <button className="btn btn-outline-danger" onClick={() => setEstado(0)} type="button"> Eliminadas</button>
                            <button className="btn btn-outline-danger" onClick={() => navigate("/gestor/tickets-motos/moto-agregar")} type="button">Agregar moto</button>
                        </div>
                        <input className="form-control ms-auto" style={{ maxWidth: "250px" }} type="search" value={busqueda} 
                        onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar modelo" aria-label="Buscar modelo"/>
                    </div>
                </nav>
            </div>

            <div className="row g-0">
                <Card_Moto_gestor estado={estado} busqueda={busqueda} />
            </div>
        </>
    )
}

export default Gestormotos