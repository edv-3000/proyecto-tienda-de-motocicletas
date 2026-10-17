const {totalmotos,ingresarmoto,ingresargestor,ingresarticket,ingresarColor,modificarticket,ticket,tickets,
    moto} = require('../consultas/consultas')

const obtenermotos = async(req,res)=>{
    const motos = await totalmotos()
    res.json(motos)
}

const ingresarmotoPost = async(req,res)=>{
    const moto = req.body
    ingresarmoto(moto)
}



module.exports = {obtenermotos, ingresarmotoPost}