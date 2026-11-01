const express = require("express")
const routergestor = express.Router()


const { ingresargestorPost, gestores,eliminarGestorDelete,verificargestorPost } = require("../controllers/peticionesGestores");

routergestor.get("/gestor/admin/gestores", gestores)
routergestor.post("/gestor/admin", ingresargestorPost)
routergestor.delete("/gestor/admin/:id",eliminarGestorDelete)
routergestor.post("/gestor/login",middwlarelogin,autorizacion)


module.exports = routergestor;