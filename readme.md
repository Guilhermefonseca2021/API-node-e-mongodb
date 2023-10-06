<h3> padrao MVC </h3>

-Model modelos do banco de dados onde tem todos nossas tabelas. responsavel pela leitura e escrita de dados

-View camada de interacao com o usuario. ela apenas faz a exibico dos dados.

-Controller responsavel por receber todas requisicoes do usuario controlando qual model usar e qual view sera mostrado ao usuario

-routes usa nossos controles para metodos CRUD que por sua vez esta conectado com nosso schema



## insights

/ extrair o dado da requisicao, pela url = req params
const id = request.params.id

const person = await User.findOne({_id: id})           pegar do nosso banco de dados de acordo com o parametro e a referencia ao dado no nosso bacno de dados.