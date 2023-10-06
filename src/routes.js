const router = require('express').Router;
const { getUser, createUser, deleteUSer} = require('./controllers/UserController')

// router é uma funcao e quero que ela fique executando para nao precisar chamar varias vezes
const routes = router();

routes.get('/users', getUser)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUSer)

module.exports = routes;




