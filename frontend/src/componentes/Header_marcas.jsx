import yamaha from "../assets/images/logo marcas/yamaha-logo.jpg";
import honda from "../assets/images/logo marcas/honda-logo.webp";
import bajaj from "../assets/images/logo marcas/Bajaj-logo.jpg";
import suzuki from "../assets/images/logo marcas/susuki-logo.jpg";
import { NavLink } from "react-router-dom";

const Marca = () => {
    const marcas = [yamaha, honda, bajaj, suzuki];
    const marcas_text = ["yamaha", "honda", "bajaj", "suzuki"];

    return (
        <>
            {marcas.map((e, index) => (
                <NavLink to={`/marca/${marcas_text[index]}`} className="contenido_marca" key={index}>
                    <img className="imagen_marca_categoria" src={e} alt={marcas_text[index]}/>
                    <p>{marcas_text[index]}</p>
                </NavLink>
            ))}
        </>
    );
};

export default Marca;