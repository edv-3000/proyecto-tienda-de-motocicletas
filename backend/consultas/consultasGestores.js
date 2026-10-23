const {pool} = require("../config/config")
const bcrypt = require("bcrypt")

const ingresargestor = async({usuario,contraseña,rol})=>{
    const contraseñaEncriptada = bcrypt.hashSync(contraseña)
    const consulta = "INSERT INTO gestor VALUES(DEFAULT, $1, $2, $3)"
    const values = [usuario,contraseñaEncriptada,rol]
    const ingresar = await pool.query(consulta,values)
}

const verificargestor = async({usuario,contraseña})=>{
    const consulta = "SELECT * FROM gestor WHERE id = 1$"
    const values =[usuario]
    const {rows} = await pool.query(usuario)

    const usuario = rows[0]

    const compararcontraseña = await bcrypt.compare(usuario, usuario.contraseña)
}

const gestor = async()=>{
    const consulta = "SELECT * FROM gestor"
    const {rows: gestor} = await pool.query(consulta)
    return gestor
}

const eliminarGestor = async(id)=>{
    const consulta = "DELETE FROM gestor WHERE id = $1"
    const values =[id]
    const ingresar = await pool.query(consulta,values)
}

module.exports={ingresargestor, gestor, eliminarGestor}