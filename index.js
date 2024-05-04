var express = require('express'), //import a dependencia express que serve para criar e gerenciar API de forma simples
bodyParser = require('body-parser'), //middleware para que analisa e extrai dados do corpo das requisições HTTP.
mongoose = require('mongoose') //importações das dependências

mongoose.Promise = global.Promise // garante compatibilidade com diferentes versões do Mongoose e evitar mensagens de aviso (warnings) sobre a descontinuação das promessas

//conexão com banco de dados na nuvem (mongoDB Atlas)
mongoose.connect('mongodb+srv://vinicius:vinicius@cluster0.amvjabd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)})

const rotaPessoa = require('./rotas/rota.pessoa') //importação das funcionalidades do    arquivo rota.pessoa.js
  
var app = express()  //variavel app que pega os recursos do express
app.use(bodyParser.json())
app.use('/pessoa', rotaPessoa)

app.listen(3000,function(){
    console.log('Rodando na porta local 3000!')
})