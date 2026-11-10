import { useState, useContext, useEffect } from "react"
import { useParams} from "react-router-dom"
import { ContextMoto } from "../context/ContextMoto"

const ModificarMoto = () => {

    const { id } = useParams()

    const { GetMoto, moto, modificarMoto } = useContext(ContextMoto)

    const [modelo, setModelo] = useState("")
    const [marca, setMarca] = useState("")
    const [cilindrada, setCilindrada] = useState("")
    const [categoria, setCategoria] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")

    useEffect(() => {
        GetMoto(id)
    }, [id])

    useEffect(() => {

        if (!moto) return

        setModelo(moto.modelo)
        setMarca(moto.marca)
        setCilindrada(moto.cilindrada)
        setCategoria(moto.categoria)
        setPrecio(Number(moto.precio).toLocaleString("es-CL"))
        setStock(moto.stock)

    }, [moto])

    const obtenerDatos = async (e) => {
        e.preventDefault()

        try {
            const motoModelo = {
                modelo,
                marca,
                cilindrada,
                categoria,
                precio: precio.replace(/\./g, ""),
                stock: Number(stock)
            }

            await modificarMoto(id, motoModelo)

            alert("Moto modificada correctamente")

        } catch (error) {
            console.error("Error al modificar la moto:", error)
            alert("No se pudo modificar la moto")
        }
    }

    const formatearPrecio = (valor) => {
        const numeros = valor.replace(/\D/g, "")
        return numeros ? Number(numeros).toLocaleString("es-CL") : ""
    }


    return (
        <div className="formulario-moto">
            <div className="container my-4">
                <div className="card mx-auto" style={{ maxWidth: "540px" }}>
                    <div className="card-body">

                        <h5 className="card-title mb-4">Modificar moto</h5>

                        <form onSubmit={obtenerDatos}>

                            <div className="mb-3">
                                <label htmlFor="modelo" className="form-label">Modelo</label>
                                <input type="text" className="form-control" value={modelo} onChange={(e) => setModelo(e.target.value)} id="modelo" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Marca</label>
                                <div className="d-flex flex-wrap gap-3">
                                    {["Yamaha", "Honda", "Suzuki", "Kawasaki"].map((marcaOpcion) => (
                                        <div className="form-check" key={marcaOpcion}>
                                            <input className="form-check-input" type="radio" name="marca" id={`marca-${marcaOpcion}`} value={marcaOpcion} checked={marca === marcaOpcion} onChange={(e) => setMarca(e.target.value)} required />
                                            <label className="form-check-label" htmlFor={`marca-${marcaOpcion}`}>{marcaOpcion}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cilindrada" className="form-label">Cilindrada</label>
                                <input type="text" className="form-control" value={cilindrada} onChange={(e) => setCilindrada(e.target.value)} id="cilindrada" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Categoría</label>
                                <div className="d-flex flex-wrap gap-3">
                                    {["naked", "scooter", "enduro", "deportivas"].map((categoriaOpcion) => (
                                        <div className="form-check" key={categoriaOpcion}>
                                            <input className="form-check-input" type="radio" name="categoria" id={`categoria-${categoriaOpcion}`} value={categoriaOpcion} checked={categoria === categoriaOpcion} onChange={(e) => setCategoria(e.target.value)} required />
                                            <label className="form-check-label" htmlFor={`categoria-${categoriaOpcion}`}>
                                                {categoriaOpcion.charAt(0).toUpperCase() + categoriaOpcion.slice(1)}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="precio" className="form-label">Precio</label>
                                <input type="text" className="form-control" value={precio} onChange={(e) => setPrecio(formatearPrecio(e.target.value))} id="precio" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label">Stock</label>
                                <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} id="stock" min="0" required />
                            </div>

                            <button type="submit" className="btn btn-primary" >
                                Guardar cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModificarMoto