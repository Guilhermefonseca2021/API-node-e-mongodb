const User = require('../models/User')


async function createUser(request, response) {
    const user = request.body;

    // .create metodo do use Schema do mongoose para enviar dados ao banco de dados
    const newUser = await  User.create(user)
  
    return response.status(201).json(newUser)
}

async function readUser(request, response) {
     // find() grava toda lista de usuarios no users DO User na variavel
    const users = await User.find()

    return response.status(200).json(users);
}


async function deleteUSer(request, response) {
    // extrair o dado da requisicao, pela url = req.params
    const id = request.params.id

    try {
        const person = await User.findByIdAndDelete({_id: id})

        if(!person) {
            response.status(422).json({ message: 'O usuario nao foi encontrado'})
            return
        }

        return response.status(200).json(person)
    } catch(error)  {
        response.status(500).json({ error: error})
    }
}

//  Update - put{espere objeto completo}, patch(atualizar UM campo)
async function updateUser(request, response) {
    const id = request.params.id;

    const { name, email } = request.body;

    const person = { name, email };

    try {
        // aqui tenho que declarar atualizacao depois de pegar o usuario por id
        const updatePerson = await User.findByIdAndUpdate({_id: id}, person)

        // matchCount   ver quantos registros atualizou
        if(updatePerson.matchedCount === 0) {
            response.status(422).json({ message: 'O usuario nao foi encontrado'})
        }

        response.status(200).json(person)
    } catch(error) {
        response.status(500).json({ error: error })
    }
}


module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUSer
}