import { useContext, useState, useEffect } from "react"
import { ContextMoto } from "../context/ContextMoto"
import { useParams } from "react-router-dom"
import axios from "axios"

const ModificarMoto =()=>{
    const {id} = useParams()
    const {moto, GetMoto} = useContext(ContextMoto)

    useEffect(()=>{
            GetMoto(id)
        },[])

   useEffect(() => {
  if (moto) {
    setModelo(moto.modelo || "");
    setMarca(moto.marca || "");
    setCilindrada(moto.cilindrada || "");
    setCategoria(moto.categoria || "");
    setPrecio(moto.precio || "");
    setStock(moto.stock || "");
  }
}, [moto]);

    const obtenerDatos = (e)=>{
        e.preventdefault()

        const datos = {modelo,marca,cilindrada,categoria,precio,stock}

        axios

    }

    return(<>
<form onSubmit={obtenerDatos}>
  <div className="mb-3">
    <div>
      <img
        src={moto.imagen}
        alt={`${moto.modelo}`}
        style={{ width: "200px", objectFit: "contain" }}
      />
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="modelo" className="form-label">modelo</label>
    <input type="text" className="form-control" value={modelo} onChange={(e) => setModelo(e.target.value)} id="modelo" />
  </div>

  <div className="mb-3">
    <label htmlFor="marca" className="form-label">marca</label>
    <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} id="marca" />
  </div>

  <div className="mb-3">
    <label htmlFor="cilindrada" className="form-label">cilindrada</label>
    <input type="text" value={cilindrada} onChange={(e) => setCilindrada(e.target.value)} className="form-control" id="cilindrada" />
  </div>

  <div className="mb-3">
    <label htmlFor="categoria" className="form-label">categoria</label>
    <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-control" id="categoria" />
  </div>

  <div className="mb-3">
    <label htmlFor="precio" className="form-label">precio</label>
    <input type="number" className="form-control" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="stock" className="form-label">stock</label>
    <input type="number" className="form-control" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
  </div>

  <button type="submit" className="btn btn-primary">Modificar</button>
</form>
    </>)

}