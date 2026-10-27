import yamaha from "../assets//images/logo marcas/yamaha-logo.jpg"
import honda from "../assets/images/logo marcas/honda-logo.webp"
import bajaj from "../assets/images/logo marcas/bajaj-logo.jpg"
import susuki from "../assets/images/logo marcas/susuki-logo.jpg"

const Marca =()=>{
    const marcas =[yamaha,honda,bajaj,susuki]
    const marcas_text =["yamaha","honda","bajaj","susuki"]

return(
    <>
    {marcas.map((e, index) =>(
        <div className="contenido_marca">
        <img className="imagen_marca_categoria" src={e} alt="logo marcas" />
        <p>{marcas_text[index]}</p>
    </div>
    ))}

    
    </>
)
}

export default Marca