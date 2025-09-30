const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola, mundo!")
    res.json({
        message: "Hola, de nuevo",
        timestamp: new Date().toISOString()
    })
    console.log("Recibida una solicitud GET en la ruta /")
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

