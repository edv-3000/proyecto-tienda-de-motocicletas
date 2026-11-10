import { useContext } from "react"
import { ContextMoto } from "../context/ContextMoto"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"


const Carta_moto_id = ({ }) => {
    const { id } = useParams()
    const { moto, GetMoto } = useContext(ContextMoto)

    useEffect(() => {
        GetMoto(id)
    }, [])
    return (
        <>
            <div className="main-individual">
                <div className="card mb-3" style={{ maxWidth: "500px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`${moto.imagen}`}
                                className="img-fluid rounded-start"
                                alt={moto.modelo}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Modelo: {moto.modelo}</h5>
                                <h5 className="card-text">marca: {moto.marca}</h5>
                                <p className="card-text">Categoría: {moto.categoria}</p>
                                <p className="card-text">Cilindrada: {moto.cilindrada}</p>
                                <p className="card-text">Precio: ${Number(moto.precio).toLocaleString("es-CL")}</p>
                                <NavLink to={`/financiar/${moto.id}`} className="btn btn-primary">
                                    Financiar
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carta_moto_id