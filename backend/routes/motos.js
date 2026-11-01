const express = require("express")
const routerMoto = express.Router()

const multer = require("multer")
const path = require("path");
routerMoto.use("/motos", express.static(path.resolve("motos")));
const upload = multer({dest: "motos/"})

const{obtenermotos, ingresarmotoPost, modificarmotoPut,eliminarmotoDelete, obtenermoto} = require('../controllers/peticionesMotos')

routerMoto.get("/motos",obtenermotos)

routerMoto.get("/moto/:id",obtenermoto)

routerMoto.post("/motos/registrar", upload.single("imagen"),ingresarmotoPost)

routerMoto.put("/motos/modificar/:id",modificarmotoPut)

routerMoto.delete("/motos/eliminar/:id",eliminarmotoDelete)

module.exports = routerMoto