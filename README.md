# CRUD Node.js Simples



🚀 Este é um projeto de exemplo que demonstra um CRUD (Create, Read, Update, Delete) básico utilizando Node.js.

## 🔌 Como Rodar?

Para executar este projeto localmente, siga estas etapas:

1. Baixe o projeto para o seu computador.
2. Abra o projeto com um editor de código de sua preferência.
3. Abra um terminal no diretório raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a instalação das dependências, execute o comando `node index.js` para iniciar o servidor local.

Certifique-se de que você tenha acesso à internet para conectar-se ao servidor MongoDB na nuvem.

## 💻 Tecnologias Utilizadas

- Node.js
- NPM
- Express
- MongoDB (MongoDB Atlas)
- Body Parser

## 📡 Utilizando Postman ou Software de API Client de sua Preferência

Você pode usar o Postman ou qualquer outro software de cliente de API para testar as operações CRUD deste projeto.

### Comando para requisições HTTP com verbos do CRUD:

- **Criar (Create):** [POST] http://localhost:3000/pessoa/add
- **Ler (Read):** [GET] http://localhost:3000/pessoa/ (para listar todas as pessoas)
                 [GET] http://localhost:3000/pessoa/(id da pessoa) (para obter detalhes de uma pessoa específica)
- **Atualizar (Update):** [PUT] http://localhost:3000/pessoa/update/(id da pessoa)
- **Deletar (Delete):** [DELETE] http://localhost:3000/pessoa/delete/(id da pessoa)

### Formatação do Body (JSON):

```json
{
    "nome": "Nome da Pessoa",
    "idade": 30,
    "sexo": "Masculino"
}
```

🔧 Este projeto utiliza o Node.js para o backend, Express como framework web, MongoDB (MongoDB Atlas) como banco de dados NoSQL na nuvem e Body Parser para lidar com os corpos das requisições HTTP.

Desenvolvido por 🙋🏽‍♂️[Vinicius Fernando](https://www.linkedin.com/in/viniciusfernandodev/).

