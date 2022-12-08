## Node.js E-Commerce
> E-commerce API REST usando Node.js, MongoDB, JWT e Stripe (como meio de pagamento). 

## Tabela de conteúdo:

* [Tecnologias]()
* [Features]()
* [Como Usar]()
    * [Pré-requisitos]()
    * [Variáveis de ambiente]()
    * [Rodando a aplicação]()


## Tecnologias

Abaixo estão todas as tecnologias usadas nesse projeto.

* [Express](https://expressjs.com/pt-br/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [mongoose](https://mongoosejs.com/)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [stripe](https://stripe.com/docs)

## Features

- [x] Login e Cadastro
- [x] Autenticação e Autorização de rotas com JWT
- [x] Atualização de dados do usuário
- [x] Exclusão de cadastro
- [x] Listar todos os usuários
- [x] Buscar um usuário
- [x] Contagem de usuário por data de criação
- [x] CRUD para os models Pedido, Carrinho e Produto

## Como Usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Configurando as variáveis de ambiente

Crie seu próprio arquivo .env baseado em .env.example (Crie uma instância mongoDB no Atlas MongoDB e cole a url do banco de dados e atribua a variável `MONGO_URL`, gere uma hash aleatória e atribua a `SECRET` e também crie uma conta no Stripe e cole a variável key e atribua a `STRIPE_KEY`)

### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/vilelas/Nodejs-E-Commerce

# Acesse a pasta do projeto no terminal/cmd
$ cd Nodejs-E-Commerce

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:5000 - acesse http://localhost:5000
```

<p align="center">Feito com ❤️ por João V. V. Santos 👋🏽 Entre em contato!</p>