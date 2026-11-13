import { useContext } from "react"
import { ContextMoto } from "../context/ContextMoto"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"


const Carta_moto_main = ({ }) => {
    const { motos, GetMotos } = useContext(ContextMoto)

    useEffect(() => {
        GetMotos()
    }, [])



    return (
        <>
            <div className="main">
                {motos.map((moto) =>(moto.estado === 1 &&(
                    <div className="card mb-3" key={moto.id} style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`${moto.imagen}`} className="img-fluid rounded-start" alt={moto.modelo}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Modelo: {moto.modelo}</h5>
                                    <h5 className="card-text">marca: {moto.marca}</h5>
                                    <p className="card-text">Precio: ${Number(moto.precio).toLocaleString("es-CL")}</p>
                                    <NavLink to={`/moto/${moto.id}`} className="btn btn-primary">Ver más</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                )))}
            </div>
        </>
    )
}

export default Carta_moto_main


