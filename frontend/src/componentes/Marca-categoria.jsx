import moto from "../assets/yamaha.jpg"

const Marca_modelo =()=>{
return(
    <>
    <div className="contenido_marca">
        <img className="imagen_marca_categoria" src={moto} alt="" />
        <p>Marca_modelo</p>
    </div>
    </>
)
}

export default Marca_modelo