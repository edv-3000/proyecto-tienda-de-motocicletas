const{ingresarticket,modificarticket,ticket,tickets} = require("../consultas/consultaTickets")

const obtenerticket = async(req,res)=>{
    const ticketunico = ticket()
    res.json(ticketunico)
}

const obtenertickets = async(req,res)=>{
    const totaltickets = tickets()
    res.json(totaltickets)
}

const ingresarticketPost = async(req,res)=>{
    const ticket = req.body
    await ingresarticket(ticket)
}
const modificarticketPut = async(req,res)=>{
    const {id} = req.params
    const ticket = req.body

    await modificarticket(id,ticket)
}

module.exports = {obtenerticket,obtenertickets,ingresarticketPost,modificarticketPut}

