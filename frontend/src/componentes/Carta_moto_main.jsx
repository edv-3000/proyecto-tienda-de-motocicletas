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
            {motos.map((moto) => (
                <div className="card mb-3" key={moto.id} style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`http://localhost:3000/motos/${moto.imagen}`}
                                className="img-fluid rounded-start"
                                alt={moto.modelo}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{moto.modelo}</h5>
                                <p className="card-text">{moto.marca}</p>
                                <p className="card-text">${moto.precio}</p>
                                <NavLink to={`/moto/${moto.id}`} className="btn btn-primary">
                                    Ver más
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Carta_moto_main


