const { error } = require("node:console")
const { pool } = require("../config/config")
const bcrypt = require("bcrypt")

const ingresargestor = async ({ usuario, contrasena, rol }) => {
    const contraseñaEncriptada = bcrypt.hashSync(contrasena, 10)
    const consulta = "INSERT INTO gestor VALUES(DEFAULT, $1, $2, $3)"
    const values = [usuario, contraseñaEncriptada, rol]
    const ingresar = await pool.query(consulta, values)
}

const verificargestor = async ({ usuario, contrasena }) => {
    const consulta = "SELECT * FROM gestor WHERE usuario = $1"
    const values = [usuario]
    const { rows } = await pool.query(consulta, values)

    const usuariorows = rows[0]

    if (!usuariorows) {
        return null
    }

    const compararcontraseña = await bcrypt.compare(contrasena, usuariorows.contrasena)

    if (!compararcontraseña) {
        return null
    }

    return usuariorows

}

const gestor = async () => {
    const consulta = "SELECT * FROM gestor WHERE rol = 'gestor'"
    const { rows: gestor } = await pool.query(consulta)
    return gestor
}

const eliminarGestor = async (id) => {
    const consulta = "DELETE FROM gestor WHERE id = $1"
    const values = [id]
    const ingresar = await pool.query(consulta, values)
}

module.exports = { ingresargestor, gestor, eliminarGestor, verificargestor }