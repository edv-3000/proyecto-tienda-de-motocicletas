import { useContext, useState } from "react"
import { contextAdmin } from "../context/ContextAdmin"

const AgregarGestor = () => {

    const { agregargestor } = useContext(contextAdmin)

    const [usuario, setUsuario] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [confirmarContrasena, setConfirmarContrasena] = useState("")

    const obtenerDatos = async (e) => {
        e.preventDefault()

        if (usuario === "" || contrasena === "" || confirmarContrasena === "") {
            alert("Todos los campos deben ser llenados")
            return
        }

        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden")
            return
        }

        try {
            await agregargestor({
                usuario, contrasena, rol: "gestor"
            })

            alert("Gestor agregado correctamente")

            setUsuario("")
            setContrasena("")
            setConfirmarContrasena("")

        } catch (error) {
            alert("No se pudo agregar el gestor")
            console.error(error)
        }
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                Agregar gestor
            </div>
            <div className="card-body">
                <form onSubmit={obtenerDatos}>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control" value={usuario} 
                        onChange={(e) => setUsuario(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" value={contrasena} 
                        onChange={(e) => setContrasena(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" value={confirmarContrasena} 
                        onChange={(e) => setConfirmarContrasena(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Agregar
                    </button>

                </form>
            </div>
        </div>
    )
}
export default AgregarGestor