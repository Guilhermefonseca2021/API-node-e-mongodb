
const User = require('../models/User')

async function getUser(request, response) {
     // find() grava toda lista de usuarios no users DO User na variavel
    const users = await User.find()

    return response.status(200).json(users);
}

async function createUser(request, response) {
    const user = request.body;

    // .create metodo do use Schema do mongoose para enviar dados ao banco de dados
    const newUser = await  User.create(user)
  
    return response.status(201).json(newUser)
}

async function deleteUSer(request, response) {
    const id = request.params.id

    await User.findByIdAndDelete({_id: id})

    return response.status(200).json({ response: "User deleted"})
}

module.exports = {
    getUser,
    createUser,
    deleteUSer
}