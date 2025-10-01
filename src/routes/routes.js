app.get("/", (req, res) => {
    res.send("Hola, mundo!")
})

app.get("/users", middlewarePersonalizado,(req, res) => {
    res.json({
        message: "Hola, aquí los usuarios",
        timestamp: new Date().toISOString()
    })
})

app.get("/products", (req, res) => {
    res.send("Aquí los productos")
})

module.exports = routes