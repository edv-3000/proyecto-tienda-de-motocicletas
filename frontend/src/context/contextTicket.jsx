   import { Children, createContext, useContext, useState, } from "react"
    import axios from "axios"

    export const contextTicket = createContext()

    export const TicketProvider = ({children})=>{

        const [tickets, setTickets] = useState([])
        const [ticket,setTicket]= useState([])

        const GetTickets = async()=>{
            const respuesta = await axios.get("http://localhost:3000/tickets")
            setTickets(respuesta.data)

        }

    const GetTicket = async (id) => {
    try {
        const respuesta = await axios.get(`http://localhost:3000/ticket/${id}`);
        console.log("ticket recibido:", respuesta.data);
         setTicket(respuesta.data[0]);
    } catch (error) {
        console.error("error al obtener el ticket:")
    }
    
};
        return (
            <contextTicket.Provider value={{ GetTicket,GetTickets,ticket,tickets }}>
                {children}
            </contextTicket.Provider>
        );

    }


    export default TicketProvider