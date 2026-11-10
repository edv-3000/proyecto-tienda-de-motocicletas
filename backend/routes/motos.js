const express = require("express")
const routerMoto = express.Router()
const multer = require("multer")
const upload = multer({
    storage: multer.memoryStorage()
});


const {autorizacion} = require("../controllers/jsw")
const{obtenermotos, ingresarmotoPost, modificarmotoPut,eliminarmotoDelete, obtenermoto} = require('../controllers/peticionesMotos')

routerMoto.get("/motos",obtenermotos)

routerMoto.get("/moto/:id",obtenermoto)

routerMoto.post("/motos/registrar",autorizacion,upload.single("imagen"),ingresarmotoPost)

routerMoto.put("/motos/modificar/:id",autorizacion,modificarmotoPut)

routerMoto.put("/motos/eliminar/:id",autorizacion,eliminarmotoDelete)

module.exports = routerMoto