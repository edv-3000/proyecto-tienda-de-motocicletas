const express = require("express")
const routerticket = express.Router()

const {obtenertickets,ingresarticketPost,modificarticketPut, obtenerticketcorreo, obtenerticketid} = require("../controllers/peticionesTickets");
const { autorizacion } = require("../controllers/jsw");


routerticket.post("/ticket/agregar", ingresarticketPost)

routerticket.post("/ticket/correo", obtenerticketcorreo)

routerticket.get("/ticket/:id", obtenerticketid)

routerticket.get("/tickets", obtenertickets)

routerticket.put("/ticket/modificar/:id",modificarticketPut)

module.exports = routerticket