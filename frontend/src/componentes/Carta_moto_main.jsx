import moto from "../assets/yamaha.jpg"

const Carta_moto_main = () => {
    return (
        <>
            <div className="card" style={{width: "10rem"}}>
                <img src={moto} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">modelo</h5>
                        <p className="card-text">marca</p>
                        <p className="card-text">precio</p>
                        <a href="#" className="btn btn-primary">ver mas</a>
                    </div>
            </div>
        </>
    )
}

export default Carta_moto_main