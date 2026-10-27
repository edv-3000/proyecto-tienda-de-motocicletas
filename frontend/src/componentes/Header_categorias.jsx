import naked from "../assets/images/imagen categorias/mt-03.jpg"
import scooter from "../assets/images/imagen categorias/honda-elite.jpg"
import enduro from "../assets/images/imagen categorias/xtz-150.jpg"
import deportivas from "../assets/images/imagen categorias/gsx-250.jpg"

const Categoria =()=>{
    const categoria =[naked,scooter,enduro,deportivas]
    const categoria_text =["naked","scooter","enduro","deportivas"]

return(
    <>
    {categoria.map((e, index) =>(
        <div className="contenido_marca">
        <img className="imagen_marca_categoria" src={e} alt="logo marcas" />
        <p>{categoria_text[index]}</p>
    </div>
    ))}

    
    </>
)
}

export default Categoria