
import { useState, useContext } from "react"
import axios from "axios"
import { contextToken } from "../context/ContextToken"

const FormularioMoto = () => {

  const { usarToken } = useContext(contextToken)

  const [imagen, setImagen] = useState(null)
  const [modelo, setModelo] = useState("")
  const [marca, setMarca] = useState("")
  const [cilindrada, setCilindrada] = useState("")
  const [categoria, setCategoria] = useState("")
  const [precio, setPrecio] = useState("")

  const obtenerDatos = async (e) => {
    e.preventDefault()

    try {
      const estado = 1

      const motoModelo = new FormData()

      motoModelo.append("imagen", imagen)
      motoModelo.append("modelo", modelo)
      motoModelo.append("marca", marca)
      motoModelo.append("cilindrada", cilindrada)
      motoModelo.append("categoria", categoria)
      motoModelo.append("precio", precio.replace(/\./g, ""))
      motoModelo.append("estado", estado)

      const respuesta = await axios.post(
        "http://localhost:3000/motos/registrar",
        motoModelo,
        usarToken
      )

      console.log("Moto registrada:", respuesta.data)
      alert("Moto registrada correctamente")

    } catch (error) {
      console.error("Error al registrar la moto:", error.response?.data || error.message)
      alert("No se pudo registrar la moto. Revisa la consola.")
    }
  }

  return (
    <>
      <div className="formulario-moto">
        <div className="container my-4">
          <div className="card mx-auto" style={{ maxWidth: "540px" }}>
            <div className="card-body">

              <h5 className="card-title mb-4">Registrar moto</h5>

              <form onSubmit={obtenerDatos}>

                <div className="mb-3">
                  <label htmlFor="imagen" className="form-label">
                    Elegir imagen moto
                  </label>

                  <input
                    className="form-control"
                    onChange={(e) => setImagen(e.target.files[0])}
                    id="imagen"
                    type="file"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="modelo" className="form-label">
                    Modelo
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    id="modelo"
                  />
                </div>

                
                <div className="mb-3">
                  <label className="form-label">Marca</label>

                  <div className="d-flex flex-wrap gap-3">
                    {["Yamaha", "Honda", "Suzuki", "Kawasaki"].map((marcaOpcion) => (
                      <div className="form-check" key={marcaOpcion}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="marca"
                          id={`marca-${marcaOpcion}`}
                          value={marcaOpcion}
                          checked={marca === marcaOpcion}
                          onChange={(e) => setMarca(e.target.value)}
                          required
                        />

                        <label
                          className="form-check-label"
                          htmlFor={`marca-${marcaOpcion}`}
                        >
                          {marcaOpcion}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="cilindrada" className="form-label">
                    Cilindrada
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={cilindrada}
                    onChange={(e) => setCilindrada(e.target.value)}
                    id="cilindrada"
                  />
                </div>

                
                <div className="mb-3">
                  <label className="form-label">Categoría</label>

                  <div className="d-flex flex-wrap gap-3">
                    {["naked", "scooter", "enduro", "deportivas"].map((categoriaOpcion) => (
                      <div className="form-check" key={categoriaOpcion}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="categoria"
                          id={`categoria-${categoriaOpcion}`}
                          value={categoriaOpcion}
                          checked={categoria === categoriaOpcion}
                          onChange={(e) => setCategoria(e.target.value)}
                          required
                        />

                        <label
                          className="form-check-label"
                          htmlFor={`categoria-${categoriaOpcion}`}
                        >
                          {categoriaOpcion.charAt(0).toUpperCase() + categoriaOpcion.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="precio" className="form-label">
                    Precio
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    id="precio"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormularioMoto

