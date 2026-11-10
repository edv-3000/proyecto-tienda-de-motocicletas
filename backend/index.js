const express = require("express");
require("dotenv").config({ path: "./config/.env" })
const app = express();
const cors = require("cors");
const routergestor = require("./routes/gestores.js")
const routerticket = require("./routes/tickets.js");
const routerMoto = require("./routes/motos.js");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(routerMoto);
app.use(routerticket);
app.use(routergestor);



app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`);
});