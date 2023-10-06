const router = require('express').Router;
const { readUser , createUser, deleteUSer} = require('./controllers/UserController')

// router é uma funcao e quero que ela fique executando para nao precisar chamar varias vezes
const routes = router();

routes.get('/users', readUser)
routes.post('/users', createUser)
routes.delete('/person/:id', deleteUSer)

module.exports = routes;




