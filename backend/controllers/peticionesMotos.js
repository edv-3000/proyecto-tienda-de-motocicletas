
const {totalmotos,ingresarmoto,moto,modificarmoto,eliminarmoto} = require("../consultas/consultasMotos")



const obtenermotos = async(req,res)=>{
    const motos = await totalmotos()
    res.json(motos)
}

const ingresarmotoPost = async(req,res)=>{
    const moto = {
        ...req.body,
        imagen: req.file ? req.file.path : null,     
    }

    await ingresarmoto(moto)
    const motos = await totalmotos()
    res.json(motos)

    console.log("ARCHIVO:", req.file);
console.log("DATOS:", req.body);
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
    try {
        const {id} = req.params
    const enviarmoto = await moto(id)
    res.json(enviarmoto)
    } catch (error) {console.log("error no se puede obtener la moto")   
        res
    }
    
}


module.exports = {obtenermotos, ingresarmotoPost,modificarmotoPut,eliminarmotoDelete, obtenermoto}