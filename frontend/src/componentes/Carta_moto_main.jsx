import moto from "../assets/yamaha.jpg"

const Carta_moto_main = ({Motos}) => {
    return (
        <>
            {Motos.map((moto)=>(
                <div className="card" key={moto.id} style={{width: "10rem"}}>
                <img src={moto.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{moto.modelo}</h5>
                        <p className="card-text">{moto.marca}</p>
                        <p className="card-text">{moto.precio}</p>
                        <a href="#" className="btn btn-primary">ver mas</a>
                    </div>
            </div>
            ) )}
            
        </>
    )
}

export default Carta_moto_main