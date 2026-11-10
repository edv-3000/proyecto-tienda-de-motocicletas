import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import RutaProtegida from "../componentes/RutaProtegida"
import Admin from "./Admin"
import GestorTicketMotos from "./Gestor_Tickets_motos.jsx"
import ErrorRuta from "../componentes/ErrorRuta.jsx"


const Gestor = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<RutaProtegida />}>
                <Route path="tickets-motos/*" element={<GestorTicketMotos/>} />
                <Route path="admin" element={<Admin />} /> 
                 <Route path="*" element={<ErrorRuta />} />
            </Route>
        </Routes>
    )
}

export default Gestor