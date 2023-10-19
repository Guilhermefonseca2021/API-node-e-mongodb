const express = require("express");
const connectDataBase = require('./database/connection')
const routes = require('./routes')


const app = express();


app.use(express.json());
app.use(routes)


connectDataBase()
  .then(() => {
    app.listen(3333, () => console.log("servidor rodando"));
    console.log('Conectado ao banco de dados')
  })
  .catch((error) => console.log('deu ruim ' + error));
  