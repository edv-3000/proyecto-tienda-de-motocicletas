const express = require("express")
const app = express()
const cors = require("cors")


const{obtenermotos, ingresarmotoPost, modificarmotoPut,eliminarmotoDelete, obtenermoto} = require('./controllers/peticionesMotos')

const {obtenerticket,obtenertickets,ingresarticketPost,modificarticketPut} = require("./controllers/peticionesTickets")

app.use(cors())
app.use(express.json())

app.listen(3000,()=>{console.log("servidor encendido en el puerto 3000")})

app.get("/motos",obtenermotos)

app.get("/moto",obtenermoto)

app.post("/motos/registrar",ingresarmotoPost)

app.put("/motos/modificar/:id",modificarmotoPut)

app.delete("/motos/modificar/:id",eliminarmotoDelete)

app.post("/ticket/agregar", ingresarticketPost)

app.get("/ticket/:id", obtenerticket)

app.get("/tickets", obtenerticket)

app.put("ticket/modificar", modificarticketPut)
