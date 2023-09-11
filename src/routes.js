const router = require('express').Router;
const getUsers = require('./controllers/UserController').getUser;
const createUser = require('./controllers/UserController').createUser;
const deleteUser = require('./controllers/UserController').deleteUSer;

// router é uma funcao e quero que ela fique executando para nao precisar chamar varias vezes
const routes = router();

routes.get('/users', getUsers)
routes.post('./users', createUser)
routes.delete('/users/:id', deleteUser)

module.exports = routes;




