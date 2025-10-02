const router = require('express').Router()
const { registerNewUser,getUserDetails,updateUserData,deleteUser,loginUser } = require('../controllers/controllers')


// API

// rutas para acceder a servicios

router.get('/checkhealth', (req,res)=> {
    res.send("Todo ok!")
})

// /user (POST) --> Crear un nuevo usuario

router.post('/user', registerNewUser)


// /user (GET) --> obtener datos de un usuario

router.get('/user/:id', getUserDetails )


// /user (PUT) --> Actualizar datos de un usuario
router.put('/user/:id', updateUserData)


// /user (DELETE) --> Eliminar datos de un usuario
router.put('/user/:id', deleteUser)


// /user (POST) --> login 
router.post('/user/:id', loginUser)





/* app.get("/", (req, res) => {
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
}) */

module.exports = routes