


const registerNewUser = (req, res) => {
    res.send("Acá creamos un nuevo usuario")
}


const getUserDetails = (req,res) => {
    res.send("Acá obtenemos los datos de un nuevo usuario")
    console.log(req)
}


const updateUserData = (req,res) => {
    res.send("Acá actualizamos los datos de un usuario")
}


const deleteUser = (req,res) => {
    res.send("Acá eliminamos los datos de un usuario")
}


const loginUser = (req,res) => {
    res.send("Acá hacemos login de un usuario")
}


module.exports = {
    registerNewUser,
    getUserDetails,
    updateUserData,
    deleteUser,
    loginUser
}
