const { error } = require("node:console")
const jwt = require("jsonwebtoken")
const {ingresargestor, gestor, eliminarGestor,verificargestor} = require("../consultas/consultasGestores")

const ingresargestorPost= async(req,res)=>{
    const ingresogestor = req.body
    await ingresargestor(ingresogestor)

  const respuesta =  await gestor()
    res.json(respuesta)
}

const gestores = async(req,res)=>{
  const  datos = await gestor()
  res.json(datos)
}

const eliminarGestorDelete = async(req,res)=>{
    const {id} = req.body
    await eliminarGestor(id)

    const respuesta = await gestor()
    res.json(respuesta)
}

const verificargestorPost=async(req,res)=>{
    try {

        const gestor=await verificargestor(req.body)
        
        if(!gestor){
        return   res.status(401).json({
                error:"usuario o contraseña incorrectos"
            })}

            const token = jwt.sign({ usuario: gestor.usuario, rol: gestor.rol}, "jwt-token")

        return(res.status(200).json({
            mensaje : "usuario y contraseña correctos",
            token : token,
            usuario : gestor.usuario,
            rol : gestor.rol
        }))
        
    } catch (error) {
        console.error(error)
        
    }
}

module.exports={ingresargestorPost, gestores,eliminarGestorDelete,verificargestorPost}