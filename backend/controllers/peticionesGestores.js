const {ingresargestor, gestor, eliminarGestor} = require("../consultas/consultasGestores")

const ingresargestorPost= async(req,res)=>{
    const gestor = req.body
    await ingresargestor(gestor)
}

const gestores = async(req,res)=>{
  const  datos = await gestor()
  res.json(datos)
}

const eliminarGestorDelete = async(req,res)=>{
    const {id} = req.params
    await eliminarGestor(id)
}

module.exports={ingresargestorPost, gestor,eliminarGestor}