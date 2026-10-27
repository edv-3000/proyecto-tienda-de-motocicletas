import { useState } from "react"
import axios from "axios"


const FormularioMoto = ()=>{

    const [imagen,setImagen]= useState(null)
    const [modelo,setModelo]= useState("")
    const [marca,setMarca]= useState("")
    const [cilindrada,setCilindrada]= useState("")
    const [categoria,setCategoria]= useState("")
    const [precio,setPrecio] = useState("")

    const obtenerDatos = async(e)=>{
        e.preventDefault()

        const motoModelo = new FormData()

        motoModelo.append("imagen", imagen);
motoModelo.append("modelo", modelo);
motoModelo.append("marca", marca);
motoModelo.append("cilindrada", cilindrada);
motoModelo.append("categoria", categoria);
motoModelo.append("precio", precio);

        console.log(motoModelo)

        await axios.post("http://localhost:3000/motos/registrar", motoModelo)
    }

    return(<>
    <form onSubmit={obtenerDatos}>
<div className="mb-3">

  <label htmlFor="imagen" class="form-label" >elegir imagen moto</label>
  <input className="form-control" onChange={(e) => setImagen(e.target.files[0])}id="imagen" type="file"/>

</div>
  <div className="mb-3">
    <label htmlFor="modelo" className="form-label">modelo</label>
    <input type="text" className="form-control" value={modelo} onChange={(e) => setModelo(e.target.value)} id="modelo" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="marca" className="form-label" >marca</label>
    <input type="text" className="form-control" value={marca}onChange={(e) => setMarca(e.target.value)} id="marca"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cilindrada" className="form-label" >cilindrada</label>
    <input type="text" value={cilindrada} onChange={(e)=> setCilindrada(e.target.value)}
     className="form-control" id="cilindrada"/>
  </div>
  <div className="mb-3">
    <label htmlFor="categoria" className="form-label" >categoria</label>
    <input type="text" value={categoria} onChange={(e)=> setCategoria(e.target.value)} className="form-control" id="categoria"/>
  </div>
  <div className="mb-3">
    <label htmlFor="precio" className="form-label" >precio</label>
    <input type="text" className="form-control" id="precio" value={precio} onChange={(e)=> setPrecio(e.target.value)}/>
  </div>
  <button type="submit"  className="btn btn-primary" >registrar</button>
</form>
    </>)
}

export default FormularioMoto