import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { contextTicket } from "../context/contextTicket";
import  logo  from "../assets/images/logo marcas/logo.jpg"

const Navbar = () => {
    const { GetTicketid, PostTicketcorreo } = useContext(contextTicket);
    const [numero, setNumero] = useState("");
    const [correo, setCorreo] = useState("");
    const navigate = useNavigate();

    const consultarTicket = async (e) => {
        e.preventDefault();

        if (numero !== "" && correo !== "") {
            alert("Debes ingresar solo un dato: número de ticket o correo.");
            return;
        }

        if (numero !== "") {
            await GetTicketid(numero);
            navigate(`/ticket/numero`);
        } else if (correo !== "") {
            await PostTicketcorreo(correo);
            navigate("/ticket-correo");
        } else {
            alert("Ingresa un número de ticket o un correo.");
        }
    };

    return (
        <nav className="navbar bg-dark text-white p-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <NavLink to="/" className="logo-navbar">
                    <img src={logo} alt="Long Way" />
                    <span>LONG WAY</span>
                </NavLink>
                <div className="d-flex align-items-center gap-2">
                    <p className="text-info m-0">CONSULTAR TICKET</p>
                    <form onSubmit={consultarTicket} className="d-flex align-items-center gap-2">
                        <input className="form-control" type="search" placeholder="Número de ticket" value={numero} onChange={(e) => setNumero(e.target.value)} />
                        <p className="pNavbar text-warning m-1">o</p>
                        <input type="email" className="form-control" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <button type="submit" className="btn btn-primary btn-sm">Consultar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;