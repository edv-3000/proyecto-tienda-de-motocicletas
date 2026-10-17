const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const{obtenermotos} = require('./controllers/peticiones')

app.use(express.json())

app.listen(3000,()=>{console.log("servidor encendido en el puerto 3000")})

app.get("/motos",obtenermotos)