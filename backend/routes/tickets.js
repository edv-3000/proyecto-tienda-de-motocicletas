const express = require("express")
const routerticket = express.Router()

const {obtenerticket,obtenertickets,ingresarticketPost,modificarticketPut} = require("../controllers/peticionesTickets");


routerticket.post("/ticket/agregar", ingresarticketPost)

routerticket.get("/ticket/:id", obtenerticket)

routerticket.get("/tickets", obtenertickets)

routerticket.put("/ticket/modificar", modificarticketPut)

module.exports = routerticket