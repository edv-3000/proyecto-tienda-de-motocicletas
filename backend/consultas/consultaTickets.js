const {pool} = require("../config/config")

const ingresarticket = async ({nombre, correo, telefono, id_moto, precio, estado, tipo_compra, fecha_actualizacion}) => {
    const consulta = `INSERT INTO ticket VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,DEFAULT,$8) RETURNING id`;

    const values = [nombre, correo, telefono, id_moto, precio, estado, tipo_compra, fecha_actualizacion];

    const { rows } = await pool.query(consulta, values);

    return rows[0];
}
const modificarticket = async (id, { nombre, correo, telefono, id_moto, estado, tipo_compra }) => {
    const consulta = ` UPDATE ticket SET  nombre = $2, correo = $3, telefono = $4, id_moto = $5, estado = $6, tipo_compra = $7, fecha_actualizacion = NOW() WHERE id = `

    const values = [id, nombre, correo, telefono, id_moto, estado, tipo_compra]

    await pool.query(consulta, values)
}

    const tickets = async()=>{
        const consulta = "SELECT ticket.*,  moto.modelo, moto.stock FROM ticket INNER JOIN moto ON ticket.id_moto = moto.id"
        const {rows: ticket} = await pool.query(consulta)
        return ticket
    }
    const ticketid = async(id)=>{
        const consulta = `SELECT ticket.*,  moto.modelo, moto.stock, moto.precio FROM ticket INNER JOIN moto ON ticket.id_moto = moto.id
        WHERE ticket.id = $1`
        const values=[id]
        const {rows: ticket} = await pool.query(consulta,values)
        return ticket
    }
    const ticketcorreo = async(correo)=>{
        const consulta = `SELECT ticket.*,  moto.modelo, moto.stock FROM ticket INNER JOIN moto ON ticket.id_moto = moto.id
        WHERE ticket.correo = $1`
        const values=[correo]
        const {rows: ticket} = await pool.query(consulta,values)
        console.log(ticket)
        return ticket
    }

    module.exports ={ ingresarticket,modificarticket,ticketid,tickets,ticketcorreo}