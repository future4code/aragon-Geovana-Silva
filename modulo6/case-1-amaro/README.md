# Amaro Fashion Back-end Challenge

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amaro_logo.png" width="320" alt="Amaro Fashion Logo" />
</p>

## Description

Simulação dos produtos da Amaro, você pode acessar os produtos e os inserir bem como até usar as tags para identificar os produtos.

## Instruções
 Para rodar o sistema é necessário:

#### 1) Criar o arquivo `.env` e configurar com as informações de seu banco de dados:
```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

#### 2) Instalar as dependências:

-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

#### 3) Popular a tabela:

-   `npm run migrations`
    Popula a tabela com dados de usuários.
    _Esse script deve ser executado apenas uma única vez, ou quando você quiser reiniciar a população das tabelas iniciais_

#### 4) Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

### Endpoints:

#### SIGNUP

-   Method: `POST`
-   Path: `/users/signup`
-   Input: `name(string), email(string) e password(string)`
-   Output: mensagem de cadastro realizado e token

#### LOGIN

-   Method: `GET`
-   Path: `/users/login`
-   Input: `email(string) e password(string)`
-   Output: mensagem de login realizado e token

#### GET ALL PRODUCTS

-   Method: `GET`
-   Path:`/products/?order=name&sort=asc`
-   Output: uma lista com todos produtos.

#### SEARCH PRODUCT

-   Method: `GET`
-   Path:`/products/busca?q=moletom`
-   Output: produtos de acordo com o que é solicitado na busca.

#### CREATE PRODUCT

-   Method: `POST`
-   Path:`/products`
-   Input: `name(string), tags(array de string)`
-   Output: retorna o produto criado.

## Documentação:
[Postman](https://documenter.getpostman.com/view/20785860/VUxKTpB3)
[Heroku](https://amaro-products-challege.herokuapp.com/products)

## Teste unitário:
<img src ="test.jpg">
## Stack utilizada
- NodeJS
- TypeScript
- SQL
- Knex
- Express
- Cors
## Programas utilizados
- VSCode
- MySQL Workbench
- Postman API Platform
- Heroku: Cloud Application Platform