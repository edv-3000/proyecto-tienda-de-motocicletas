const Carta_moto_id=()=>{
    return(
        <>
        <div className="card" style={{width: "10rem"}}>
                        <img src={moto} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">modelo</h5>
                                <p className="card-text">marca</p>
                                <p className="card-text">categoria</p>
                                <p className="card-text">cilindraje</p>
                                <p className="card-text">colores</p>
                                <p className="card-text">precio</p>
                                <a href="#" className="btn btn-primary">financiar</a>
                            </div>
                    </div>
        </>
    )
}