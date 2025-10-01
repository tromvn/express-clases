const app = require('./src/app/app.js')
// const middlewares = require('./src/middlewares/middlewares.js');
// const routes = require('./src/routes/routes.js')
const port = 3000;

// const middlewarePersonalizado = (req, res, next) => {
//     console.log("Pasando por middlewarePersonalizado")
//     next()
// }


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

