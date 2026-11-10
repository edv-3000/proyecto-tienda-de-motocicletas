import { useNavigate } from "react-router-dom"

const ErrorRuta = () => {

    const navigate = useNavigate()

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card text-center shadow p-4" style={{ maxWidth: "400px" }}>
                <div className="card-body">
                    <h1 className="display-1 fw-bold">404</h1>
                    <h4 className="mb-3">Página no encontrada</h4>
                    <p className="text-muted">La página que buscas no existe o no está disponible.</p>
                    <button className="btn btn-dark" onClick={() => navigate("/")}> Volver al inicio </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorRuta