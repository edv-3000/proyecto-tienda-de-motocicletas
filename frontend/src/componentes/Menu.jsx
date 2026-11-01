import { Route, Routes } from "react-router-dom";
import FormularioTicketRegistrar from "../pages/FormularioTicketRegistrar";
import FormularioMoto from "../pages/Formulario_moto";
import Carta_moto_main from "./Carta_moto_main";
import Carta_moto_id from "./Carta_moto_id";

const Menu = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Carta_moto_main />} />
        <Route path="/moto/:id" element={<Carta_moto_id/>} />
        <Route path="/marca/" element={<div>Catálogo de la marca</div>} />
        <Route path="/financiar/:id" element={<FormularioTicketRegistrar />} />
        <Route path="/consultar-ticket" element={<FormularioTicketRegistrar />} />
      </Routes>
    </div>
  );
};

export default Menu;