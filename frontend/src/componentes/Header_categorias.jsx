import naked from "../assets/images/imagen categorias/mt-03.jpg";
import scooter from "../assets/images/imagen categorias/honda-elite.jpg";
import enduro from "../assets/images/imagen categorias/xtz-150.jpg";
import deportivas from "../assets/images/imagen categorias/gsx-250.jpg";
import { NavLink } from "react-router-dom";

const Categoria = () => {
    const categoria = [naked, scooter, enduro, deportivas];
    const categoria_text = ["naked", "scooter", "enduro", "deportivas"];

    return (
        <>
            {categoria.map((e, index) => (
                <NavLink to={`/categoria/${categoria_text[index]}`} className="contenido_marca" key={index}>
                    <img className="imagen_marca_categoria" src={e} alt={categoria_text[index]}/>
                    <p>{categoria_text[index]}</p>
                </NavLink>
            ))}
        </>
    );
};

export default Categoria;