
const card_ticket = ()=>{
    <div class="card">
  <div class="card-body">
    <h3>ticket ${ticket.id}</h3>
    <p>nombre : ${ticket.nombre}</p>
    <p>correo : ${ticket.correo}</p>
    <p>telefono : ${ticket.telefono}</p>
    <p>modelo: ${ticket.modelo}</p>
    <p>precio: ${ticket.precio}</p>
    <p>color : ${}</p>
    <p>categoria: ${ticket.categoria}</p>
    <p>estado : ${ticket.estado}</p>
    <p>tipo de compra : ${ticket.tipo_compra}</p>
    <p>fecha de creacion : ${ticket.fecha_creacion}</p>
    <p>fecha de actualizacion : ${ticket.fecha_actualizacion}</p>
  </div>
</div>
}