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

const modificarmoto = async(id,{modelo,marca,cilindrada,categoria,precio,stock})=>{
    const consulta = `UPDATE moto SET  modelo = $2, marca = $3, cilindrada = $4, categoria = $5,
    precio = $6, stock = $7  WHERE id = $1`
    const values =[id,modelo,marca,cilindrada,categoria,precio,stock]
    const ingresar = await pool.query(consulta,values)
}

const eliminarmoto = async (id, estado) => {
    const consulta = "UPDATE moto SET estado = $2 WHERE id = $1"
    const values = [id, estado]
    await pool.query(consulta, values)
}


const ingresarmoto = async({imagen,modelo,marca,cilindrada,categoria,precio,stock = 0,estado})=>{
    const consulta = "INSERT INTO moto VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7,$8)"
    const values=[imagen,modelo,marca,cilindrada,categoria,precio,stock,estado]
    const ingresar = await pool.query(consulta,values)
}



module.exports = {totalmotos,ingresarmoto,moto,modificarmoto,eliminarmoto}