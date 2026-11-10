import { useEffect, useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextMoto } from "../context/ContextMoto"

const Card_Moto_gestor = ({ estado, busqueda }) => {

    const { motos, GetMotos, eliminarMoto } = useContext(ContextMoto)

    useEffect(() => {
        GetMotos()
    }, [])

    const estadoMotos = motos.filter((moto) =>
        Number(moto.estado) === estado &&
        moto.modelo.includes(busqueda)
    )

    return (
        <>
            <div className="main">
                {estadoMotos.map((moto) => (
                    <div className="card mb-3" style={{ maxWidth: "540px" }} key={moto.id}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={moto.imagen} className="img-fluid rounded-start" alt={moto.modelo} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Modelo: {moto.modelo}</h5>
                                    <p className="card-text">Categoría: {moto.categoria}</p>
                                    <p className="card-text">Cilindrada: {moto.cilindrada}</p>
                                    <p className="card-text">Precio: ${Number(moto.precio).toLocaleString("es-CL")}</p>
                                    <p className="card-text">stock: {moto.stock}</p>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <NavLink to={`/gestor/tickets-motos/moto/${moto.id}`} className="btn btn-primary">Modificar</NavLink>
                                        {Number(moto.estado) === 1 ? (
                                            <button className="btn btn-outline-danger" 
                                            onClick={() => eliminarMoto(moto.id, 0)}> Eliminar </button>
                                        ) : (
                                            <button className="btn btn-outline-success" 
                                            onClick={() => eliminarMoto(moto.id, 1)}>Recuperar</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export { Card_Moto_gestor }