import { useContext, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ContextMoto } from "../context/ContextMoto";

const CatalogoCategoria = () => {
    const { motos, GetMotos } = useContext(ContextMoto);
    const { categoria } = useParams();

    useEffect(() => {
        GetMotos();
    }, []);

    return (
        <>
            <div className="main">
                {motos.filter((moto) => moto.categoria === categoria && moto.estado === 1).map((moto) => (
                        <div className="card mb-3" key={moto.id} style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`${moto.imagen}`} className="img-fluid rounded-start" alt={moto.modelo}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{moto.modelo}</h5>
                                        <p className="card-text">{moto.marca}</p>
                                        <p className="card-text">${Number(moto.precio).toLocaleString("es-CL")}</p>
                                        <NavLink to={`/moto/${moto.id}`} className="btn btn-primary"> Ver más</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default CatalogoCategoria;