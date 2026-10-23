const Carta_moto_id=({moto})=>{
    return(
        <>
        <div className="card" style={{width: "10rem"}}>
                        <img src={moto.id} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{moto.modelo}</h5>
                                <p className="card-text">{moto.modelo}</p>
                                <p className="card-text">{moto.categoria}</p>
                                <p className="card-text">{moto.cilindrada}</p>
                                <p className="card-text">{moto.color}</p>
                                <p className="card-text">{moto.precio}</p>
                                <a href="#" className="btn btn-primary">financiar</a>
                            </div>
                    </div>
        </>
    )
}

export default Carta_moto_id