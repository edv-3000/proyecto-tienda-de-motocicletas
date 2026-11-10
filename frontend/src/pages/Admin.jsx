import { useState, useEffect, useContext } from "react"
import { contextAdmin } from "../context/ContextAdmin"
import { contextToken } from "../context/ContextToken"
import AgregarGestor from "../componentes/Card_agregar_gestor"
import CerrarSesion from "../componentes/CerrarSesion"



const Admin = () => {

    const {redirigir} = useContext(contextToken)
    redirigir()

    const { gestor, gestores, eliminargestor } = useContext(contextAdmin)

    useEffect(() => {
        gestores()
    }, [])

    return (<>

        <div style={{ minHeight: "100vh" }} className="d-flex flex-column align-items-center gap-4 mt-5 pt-5">
            <div className="w-100 d-flex justify-content-center pt-5 mt-5">
                <CerrarSesion />
            </div>

            <div className="d-flex justify-content-center align-items-center gap-4">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">
                        gestores
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            {gestor.map((g) => (
                                <div key={g.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                                    <p className="mb-0 fw-semibold">{g.usuario}</p>
                                    <button onClick={() => eliminargestor(g.id)} type="button" className="btn btn-outline-danger btn-sm">Eliminar</button>
                                </div>
                            ))}
                        </li>
                    </ul>
                </div>
                <AgregarGestor />
            </div>
        </div>
    </>)
}

export default Admin