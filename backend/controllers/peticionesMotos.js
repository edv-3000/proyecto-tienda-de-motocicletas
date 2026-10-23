const {totalmotos,ingresarmoto,ingresarColor,moto,modificarmoto,eliminarmoto} = require("../consultas/consultasMotos")

const obtenermotos = async(req,res)=>{
    const motos = await totalmotos()
    res.json(motos)
}

const ingresarmotoPost = async(req,res)=>{
    const moto = req.body
    await ingresarmoto(moto)
    const motos = await totalmotos()
    res.json(motos)
}

const ingresargestorPost = async(req,res)=>{
    const gestor = req.body
    await ingresargestor(gestor)
}



const ingresarColorPost = async(req,res)=>{
    const color = req.body
    await ingresarColor(color)
}


const modificarmotoPut = async(req,res)=>{
    const {id} = req.params
    const moto = req.body

    await modificarmoto(id,moto)

    const motos = await totalmotos()
    res.json(motos)
}

const eliminarmotoDelete = async(req,res)=>{
    const {id} = req.params
    await eliminarmoto(id)
    
    const motos = await totalmotos()
    res.json(motos)
    
}


const obtenermoto = async(req,res)=>{
    const obtenermoto = moto()
    res.json(obtenermoto)
}


module.exports = {obtenermotos, ingresarmotoPost,modificarmotoPut,eliminarmotoDelete, obtenermoto}