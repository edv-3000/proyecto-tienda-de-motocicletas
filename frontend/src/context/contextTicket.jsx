import { Children, createContext, useContext, useState, } from "react"
import axios from "axios"

export const contextTicket = createContext()

export const TicketProvider = ({ children }) => {

    const [tickets, setTickets] = useState([])
    const [ticket, setTicket] = useState([])
    const [ticketcorreo, setTicketcorreo] = useState([])

    const GetTickets = async () => {
        const respuesta = await axios.get("https://long-way-backend.onrender.com/tickets")
        setTickets(respuesta.data)

    }

    const GetTicketid = async (id) => {
        try {
            const respuesta = await axios.get(`https://long-way-backend.onrender.com/ticket/${id}`);
            console.log("ticket recibido:", respuesta.data);
            setTicket(respuesta.data[0]);
            
        } catch (error) {
            console.error("error al obtener el ticket:")
        }
    };

     const PostTicketcorreo = async (correo) => {
    try {
        const respuesta = await axios.post(
            "https://long-way-backend.onrender.com/ticket/correo",{ correo: correo });
        setTicketcorreo(respuesta.data);
    } catch (error) {
        console.error("Error al consultar tickets por correo:", error);
    }
};

const ModificarTicket = async (id, datos) => {
    try {
        await axios.put(`https://long-way-backend.onrender.com/ticket/modificar/${id}`, datos)
        await GetTicketid(id)
        alert("Ticket modificado correctamente")
    } catch (error) {
        console.error("Error al modificar ticket:", error)
        alert("Error al modificar el ticket: " + (error.response?.data?.error || error.message))
    }
}

    return (
        <contextTicket.Provider value={{ GetTicketid, GetTickets, ticket, tickets, PostTicketcorreo, ticketcorreo, ModificarTicket }}>
            {children}
        </contextTicket.Provider>
    );

}


export default TicketProvider