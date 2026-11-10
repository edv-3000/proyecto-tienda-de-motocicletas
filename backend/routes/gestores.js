const express = require("express")
const routergestor = express.Router()


const { ingresargestorPost, gestores,eliminarGestorDelete,verificargestorPost } = require("../controllers/peticionesGestores");
const {middlewareLogin,autorizacion} = require("../controllers/jsw")

routergestor.get("/gestor/admin/gestores",gestores)
routergestor.post("/gestor/admin",autorizacion,ingresargestorPost)
routergestor.delete("/gestor/admin/eliminar",autorizacion,eliminarGestorDelete)
routergestor.post("/gestor/login",verificargestorPost)


module.exports = routergestor;