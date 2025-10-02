const { registerNewUser,getUserDetails,updateUserData,deleteUser,loginUser } = require('../controllers/controllers')
const router = require('express').Router()


// API

// rutas para acceder a servicios

router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../../index.html'))
})


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
router.delete('/user/:id', deleteUser)


// /user (POST) --> login 
router.post('/login', loginUser)


module.exports = router