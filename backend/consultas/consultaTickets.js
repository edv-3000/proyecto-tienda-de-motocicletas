const {pool} = require("../config/config")

const ingresarticket = async({nombre, correo, telefono, id_moto,precio, estado, tipo_compra,
     fecha_actualizacion})=>{
       const consulta = `INSERT INTO ticket VALUES (DEFAULT,$1, $2, $3, $4, $5, $6, $7,DEFAULT, $8)`;
        const values =[nombre,correo,telefono,id_moto,precio,categoria,estado,tipo_compra,fecha_actualizacion]
        const ingresar = await pool.query(consulta, values)
    }
const modificarticket = async(id,{nombre, correo, telefono, id_moto, precio,  estado, tipo_compra,
     fecha_actualizacion})=>{
        const consulta = `UPDATE ticket SET nombre = $2, correo = $3, telefono = $4, id_moto = $5,
        precio = $6, estado = $7, tipo_compra = $8, fecha_actualizacion = $9 WHERE id = $1`
        const values =[id,nombre,correo,telefono,id_moto,precio,categoria,estado,tipo_compra,fecha_actualizacion]
        const ingresar = await pool.query(consulta, values)
    }

    const tickets = async()=>{
        const consulta = "SELECT ticket.*,  moto.modelo, moto.stock FROM ticket INNER JOIN moto ON ticket.id_moto = moto.id"
        const {rows: ticket} = await pool.query(consulta)
        return ticket
    }
    const ticket = async(id)=>{
        const consulta = `SELECT ticket.*,  moto.modelo, moto.stock FROM ticket INNER JOIN moto ON ticket.id_moto = moto.id
        WHERE ticket.id = $1`
        const values=[id]
        const {rows: ticket} = await pool.query(consulta,values)
        return ticket
    }

    module.exports ={ ingresarticket,modificarticket,ticket,tickets}