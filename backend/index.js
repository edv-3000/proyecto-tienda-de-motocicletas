const express = require("express");
const app = express();
const cors = require("cors");
const routergestor = require("./routes/gestores.js")
const routerticket = require("./routes/tickets.js");
const routerMoto = require("./routes/Motos.js");

app.use(cors());
app.use(express.json());

app.use(routerMoto);
app.use(routerticket);
app.use(routergestor);

app.listen(3000, () => {console.log("Servidor encendido en el puerto 3000");});