import { Route, Routes } from "react-router-dom"
import FormularioTicketRegistrar from "../pages/FormularioTicketRegistrar"
import Carta_moto_main from "./Carta_moto_main"
import Carta_moto_id from "./Carta_moto_id"
import TicketDetalle from "./Ticketid"
import TicketCorreo from "./Ticketcorreo"
import CatalogoCategoria from "../pages/CatalogoCategoria"
import CatalogoMarca from "../pages/CatalogoMarcas"
import ErrorRuta from "./ErrorRuta"

const Menu = () => {
    return (
            <Routes>
                <Route path="/" element={<Carta_moto_main />} />
                <Route path="/moto/:id" element={<Carta_moto_id />} />
                <Route path="/marca/:marca" element={<CatalogoMarca />} />
                <Route path="/categoria/:categoria" element={<CatalogoCategoria />} />
                <Route path="/financiar/:id" element={<FormularioTicketRegistrar />} />
                <Route path="/ticket/numero" element={<TicketDetalle />} />
                <Route path="/ticket-correo" element={<TicketCorreo />} />
                 <Route path="*" element={<ErrorRuta />} />
            </Routes>
    )
}

export default Menu;