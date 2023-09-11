const express = require("express");
const mongoose = require("mongoose");

const User = require('./models/User')

const app = express();


app.use(express.json());


app.get("/users", async (request, response) => {
  // find() grava toda lista de usuarios no users
  const users = await User.find()

  return response.status(200).json(users);
});

app.post("/users", async (request, response) => {
  const user = request.body;

  // .create metodo do use Schema do mongoose para enviar dados ao banco de dados
  const newUser = await  User.create(user)

  return response.status(201).json(newUser)
});


mongoose
    .connect(
        'mongodb+srv://gsbloogs194:1FMwBznOo9HxB9HC@nodesystem.kyzz3ns.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => console.log('Conectado ao banco de dados'))
    .catch((error) => console.log('deu ruim ' + error));

app.listen(3333, () => console.log("servidor rodando"));
