const{ingresarticket,modificarticket,ticketid,tickets,ticketcorreo} = require("../consultas/consultaTickets")

const obtenerticketid = async(req,res)=>{
    const {id} = req.params
    const ticketunicoid =await ticketid(id)
    res.json(ticketunicoid)
}
const obtenerticketcorreo = async(req,res)=>{
    const {correo} = req.body
    const ticketscorreo =await ticketcorreo(correo)
    console.log("TICKETS:", ticketscorreo);
    res.json(ticketscorreo)
}

const obtenertickets = async(req,res)=>{
    const totaltickets = await tickets()
    res.json(totaltickets)
}

const ingresarticketPost = async(req,res)=>{
    const ticket = req.body
    await ingresarticket(ticket)
     const totaltickets = tickets()
    res.json(totaltickets)
}
const modificarticketPut = async (req, res) => {
    try {
        const { id } = req.params
        const ticket = req.body
        await modificarticket(id, ticket)
        const ticketActualizado = await ticketid(id)
        res.json(ticketActualizado[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error al modificar el ticket" })
    }
}


module.exports = {obtenerticketid,obtenertickets,ingresarticketPost,modificarticketPut,obtenerticketcorreo}

