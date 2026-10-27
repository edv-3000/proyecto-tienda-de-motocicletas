const express = require("express")
const app = express()
const cors = require("cors")
const multer = require("multer")

const{obtenermotos, ingresarmotoPost, modificarmotoPut,eliminarmotoDelete, obtenermoto} = require('./controllers/peticionesMotos')

const {obtenerticket,obtenertickets,ingresarticketPost,modificarticketPut} = require("./controllers/peticionesTickets")

const upload = multer({dest: "motos/"})
app.use(cors())
app.use(express.json())

app.listen(3000,()=>{console.log("servidor encendido en el puerto 3000")})

app.get("/motos",obtenermotos)

app.get("/moto",obtenermoto)

app.post("/motos/registrar", upload.single("imagen"),ingresarmotoPost)

app.put("/motos/modificar/:id",modificarmotoPut)

app.delete("/motos/eliminar/:id",eliminarmotoDelete)

app.post("/ticket/agregar", ingresarticketPost)

app.get("/ticket/:id", obtenerticket)

app.get("/tickets", obtenerticket)

app.put("ticket/modificar", modificarticketPut)
