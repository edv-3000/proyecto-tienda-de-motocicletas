const {pool} = require('../config/config')

const totalmotos = async()=>{
    const consulta = "SELECT * FROM moto"
    const {rows: motos} = await pool.query(consulta)
    return motos
}
const moto = async(id)=>{
    const consulta = "SELECT * FROM moto WHERE id = $1"
    const values =[id]
    const {rows: moto} = await pool.query(consulta,values)
    return moto
}

const modificarmoto = async(id,{imagen,modelo,marca,cilindrada,categoria,precio})=>{
    const consulta = `UPDATE moto SET imagen = $2, modelo = $3, marca = $4, cilindrada = $5, categoria = $6,
    precio = $7 WHERE id = $1`
    const values =[id,imagen,modelo,marca,cilindrada,categoria,precio]
    const ingresar = await pool.query(consulta,values)
}

const eliminarmoto = async(id)=>{
    const consulta = "DELETE FROM moto WHERE id = $1"
    const values =[id]
    const ingresar = await pool.query(consulta,values)
}


const ingresarmoto = async({imagen,modelo,marca,cilindrada,categoria,precio})=>{
    const consulta = "INSERT INTO moto VALUES(DEFAULT, $1, $2, $3, $4, $5, $6)"
    const values=[imagen,modelo,marca,cilindrada,categoria,precio]
    const ingresar = await pool.query(consulta,values)
}

const ingresarColor = async({color,stock,id_moto})=>{
    const consulta = "INSERT INTO moto_color VALUES(DEFAULT, $1, $2, $3)"
    const values =[color,stock,id_moto]
    const ingresar = await pool.query(consulta,values)
}

const moto_color = async(id)=>{
    const consulta = "SELECT * FROM moto_color WHERE id_moto = $1"
    const values =[id]
    const {rows: colores} = await pool.query(consulta,values)
    return colores
}


module.exports = {totalmotos,ingresarmoto,ingresarColor,moto,modificarmoto,eliminarmoto}