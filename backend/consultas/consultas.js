const {pool} = require('../config/config')


const ingresargestor = async({usuario,contraseña,rol})=>{
    const consulta = "INSERT INTO gestor VALUES(DEFAULT, $1, $2, $3)"
    const values = [usuario,contraseña,rol]
    const ingresar = await pool.query(consulta,values)
}

const ingresarticket = async({nombre, correo, telefono, id_moto, id_color, precio, categoria, estado, tipo_compra,
     fecha_actualizacion})=>{
        const consulta = "INSERT INTO ticket VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, DEFAULT, $10)"
        const values =[nombre,correo,telefono,id_moto,id_color,precio,categoria,estado,tipo_compra,fecha_actualizacion]
        const ingresar = await pool.query(consulta, values)
    }
const modificarticket = async({id, nombre, correo, telefono, id_moto, id_color, precio, categoria, estado, tipo_compra,
     fecha_actualizacion})=>{
        const consulta = `UPDATE ticket SET nombre = $2, correo = $3, telefono = $4, id_moto = $5, id_color = $6,
        precio = $7, categoria = $8, estado = $9, tipo_compra = $10, fecha_actualizacion = $11 WHERE id = $1`
        const values =[id,nombre,correo,telefono,id_moto,id_color,precio,categoria,estado,tipo_compra,fecha_actualizacion]
        const ingresar = await pool.query(consulta, values)
    }

    const tickets = async()=>{
        const consulta = "SELECT * FROM ticket"
        const {rows: ticket} = await pool.query(consulta)
        return ticket
    }
    const ticket = async(id)=>{
        const consulta = "SELECT * FROM ticket WHERE id = $1"
        const values=[id]
        const {rows: ticket} = await pool.query(consulta,values)
        return ticket
    }



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


module.exports = {totalmotos,ingresarmoto,ingresargestor,ingresarticket,ingresarColor,modificarticket,ticket,tickets,
    moto
}