## eNode
> Essa API REST de e-commerce é construída utilizando o Node.js, um framework de JavaScript que facilita o desenvolvimento de aplicativos web de alta performance. O MongoDB é utilizado como banco de dados para armazenar os dados da API, enquanto o JWT (JSON Web Token) é utilizado para autenticação de usuários.

> Por fim, o Stripe é utilizado como meio de pagamento para permitir que os usuários efetuem pagamentos online de maneira segura e confiável.

## Tabela de conteúdo:

* [Tecnologias](https://github.com/vilelas/Nodejs-E-Commerce#tecnologias)
* [Features](https://github.com/vilelas/Nodejs-E-Commerce#features)
* [Como Usar](https://github.com/vilelas/Nodejs-E-Commerce#como-usar)
    * [Pré-requisitos](https://github.com/vilelas/Nodejs-E-Commerce#pr%C3%A9-requisitos)
    * [Variáveis de ambiente](https://github.com/vilelas/Nodejs-E-Commerce#configurando-as-vari%C3%A1veis-de-ambiente)
    * [Rodando a aplicação](https://github.com/vilelas/Nodejs-E-Commerce#rodando-o-back-end-servidor)


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
- [x] Contagem de usuário por data de criação
- [x] CRUD para os models Pedido, Carrinho, Produto e Usuário

## Como Usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Configurando as variáveis de ambiente

Para criar seu próprio arquivo .env, você precisará criar uma instância do MongoDB no Atlas MongoDB. Depois de criar a instância, copie a URL do banco de dados e atribua-a à variável ``MONGO_URL`` no seu arquivo .env. Em seguida, gere uma hash aleatória e atribua-a à variável ``SECRET`` no seu arquivo .env. Isso irá ajudar a manter sua aplicação segura.

Além disso, você precisará criar uma conta no Stripe e obter a sua chave de API. Copie a chave de API e atribua-a à variável ``STRIPE_KEY`` no seu arquivo .env. Isso permitirá que você use o Stripe para processar pagamentos em sua aplicação.

Aqui está um exemplo do que seu arquivo .env poderia parecer:

```js
MONGO_URL=mongodb://[username]:[password]@[host]:[port]/[database]
SECRET=sua_hash_aleatoria
STRIPE_KEY=sua_chave_de_api_do_stripe
```

Lembre-se de manter seu arquivo .env seguro e protegido, pois ele contém informações sensíveis, como suas credenciais de banco de dados e chave de API do Stripe.

### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/vilelas/eNode

# Acesse a pasta do projeto no terminal/cmd
$ cd eNode

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:5000 - acesse http://localhost:5000
```

<p align="center">Feito com ❤️ por João V. V. Santos 👋🏽 Entre em contato!</p>
