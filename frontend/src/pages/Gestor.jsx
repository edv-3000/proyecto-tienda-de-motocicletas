import FormularioMoto from "./Formulario_moto"
import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
const Gestor = () => {

    return (<>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/gestor" element={d}/>
            <Route path="/admin" element={<div>Panel de administración</div>} />
            <Route path="/gestor/tickets" element={<div>Gestión de tickets</div>} />
            <Route path="/gestor/ticket/:id" element={<div>Detalle del ticket</div>} />
            <Route path="/gestor/motos" element={<div>Gestión de motos</div>} />
            <Route path="/gestor/moto/:id" element={<div>Editar moto</div>} />
            <Route path="/gestor/moto-agregar" element={<FormularioMoto />} />
        </Routes>
    </>)
}

export default Gestor