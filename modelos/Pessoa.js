const mongoose = require('mongoose') // import das funcionalidades do mongoose
const Schema = mongoose.Schema // estrutura dos dados, que serão armazenados no MongoDB, atribuindo na variavel chamada Schema


// novo esquema que descreve a estrutura de dados que um documento de pessoas deve ter no banco de dados MongoDB.
// os campos nome, idade e pessoas que só pode ser armazenados valores dos tipos determinado.
// especificando que este esquema deve ser associado à coleção 'pessoa' no banco de dados MongoDB. (coleção=tabela)
let Pessoa = new Schema({
    nome: {
      type: String
    },
    idade: {
      type: Number
    },
    sexo: {
      type: String
    }
  },{
      collection: 'pessoa'
  })
  
  //exportando um modelo (model) criado usando o Mongoose.
  module.exports = mongoose.model('Pessoa', Pessoa)
  //module.exports: construção Node.js que permite exportar um valor de um módulo para que ele possa ser importado em outros arquivos.
  //mongoose.model: criando um modelo de dados chamado 'Pessoa' usando a função model do Mongoose.
  //essa função recebe dois argumentos:
  //'Pessoa': string que representa o nome do modelo.
  //Pessoa: esquema (schema) que define a estrutura dos dados