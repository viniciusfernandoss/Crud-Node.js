const express = require('express') //importando o módulo Express
const app = express() //constate app que pega os recursos da dependenicia express
const rotaPessoa = express.Router() //constate rotaPessoa que cria um roteador Express

let Pessoa = require('../modelos/Pessoa') //importa o modelo de dados da entidade Pessoa e atribui-o à variável Pessoa para ser utilizado neste arquivo.

// API para adicionar pessoa
rotaPessoa.route('/add').post(function (req, res) {
    let pessoa = new Pessoa (req.body) //variavel pessoa que recebe o valor de um request (req.body)
    pessoa.save() //salva esses dados no banco de dados
    .then(() => {
        res.status(200).json({'status': 'success','mssg': 'pessoa adicionada com sucesso'})
    })
    .catch(err => {
        res.status(409).send({'status': 'failure','mssg': 'não é possível salvar no banco de dados'})
    })
    //.then(...).catch(...): métodos usados para lidar com promessas.
    //.then(): resultado bem-sucedido de uma promessa.
    //.catch(): erros (rejeições) que ocorrem durante a execução de uma promessa.
})

  
//API para obter pessoas
rotaPessoa.route('/').get(function (req, res) {
    Pessoa.find() //consultar documentos (atributos/tabelas) do banco de dados
    .then(pessoas => {
        res.status(200).json({'status': 'success','pessoas': pessoas})
    })
    .catch(err => {
        res.status(400).send({'status': 'failure','mssg': 'Algo deu errado'})
    })
})

//API para obter pessoa pelo id
rotaPessoa.route('/pessoa/:id').get(function (req, res) {
    let id = req.params.id //variavel id que recebe valor do request passando como parametro o id
    Pessoa.findById(id) //busca a tabela pelo id
    .then(pessoa => {
        if (!pessoa) {
            res.status(400).send({'status': 'failure','mssg': 'Algo deu errado'})
        } else {
            res.status(200).json({'status': 'success','pessoa': pessoa})
        }
    })
    .catch(err => {
        res.status(400).send({'status': 'failure','mssg': 'Algo deu errado'})
    })
})


//API para atualizar pessoa
rotaPessoa.route('/update/:id').put(function (req, res) {
    let id = req.params.id
    Pessoa.findById(id)
    .then(pessoa => {
        if (!pessoa) { //validação se o id do request não existir no banco de dados
            res.status(400).send({'status': 'failure','mssg': 'Não foi possível encontrar dados'})
        } else {
            pessoa.nome = req.body.nome   //atualiza os dados da coluna nome para o valor do request
            pessoa.idade = req.body.idade
            pessoa.sexo = req.body.sexo

            return pessoa.save() //salva a atualização dos dados no banco de dados
        }
    })
    .then(result => {
        res.status(200).json({'status': 'success','mssg': 'pessoa atualizada!'})
    })
    .catch(err => {
        res.status(500).json({'status': 'error', 'mssg': 'Erro ao salvar no banco de dados'})
    })
})


//API para deletar pessoa
rotaPessoa.route('/delete/:id').delete(function (req, res) {
    let id = req.params.id
    Pessoa.findByIdAndDelete(id) // funcionalidade do mongoose que deleta a tebela pelo id
    .then(pessoa => {
        if (!pessoa) {
            res.status(400).send({'status': 'failure','mssg': 'Algo deu errado'})
        } else {
            res.status(200).json({'status': 'success','mssg': 'Delete successfully'})
        }
    })
    .catch(err => {
        res.status(400).send({'status': 'failure','mssg': 'Algo deu errado'})
    })
})


module.exports = rotaPessoa //posibilita a exportação dos dados do arquivo rotaPessoa para ser reutilizado em outro arquivo