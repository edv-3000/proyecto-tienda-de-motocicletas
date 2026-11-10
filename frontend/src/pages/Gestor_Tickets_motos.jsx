import { useNavigate } from "react-router-dom";
import FormularioMoto from "./Formulario_moto";
import { Route, Routes } from "react-router-dom";
import CerrarSesion from "../componentes/CerrarSesion";
import Gestormotos from "./GestorMotos";
import GestorTickets from "./GestorTickets";
import TicketModificar from "../componentes/Card_ticket_Modificar";
import ModificarMoto from "../pages/ModificarMoto"




const GestorTicketMotos = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="w-100 d-flex justify-content-end pt-2">
                <CerrarSesion />
            </div>

            <div className="gestor_opciones">
                <button className="gestor_boton" onClick={() => navigate("/gestor/tickets-motos/tickets")}> GESTIONAR TICKETS </button>
                <button className="gestor_boton" onClick={() => navigate("/gestor/tickets-motos/motos")} >GESTIONAR MOTOS </button>
            </div>
            <Routes>
                <Route path="tickets" element={<GestorTickets />} />
                <Route path="ticket/:id" element={<TicketModificar />} />
                <Route path="motos" element={<Gestormotos />} />
                <Route path="moto/:id" element={<ModificarMoto />} />
                <Route path="moto-agregar" element={<FormularioMoto />} />
            </Routes>

        </>
    );
};

export default GestorTicketMotos;