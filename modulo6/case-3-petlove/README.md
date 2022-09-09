# PetLove Back-end Challenge

<p align="center">
  <img src="https://media-exp1.licdn.com/dms/image/D4D1BAQFwqErJfcg5RA/company-background_10000/0/1654087705683?e=2147483647&v=beta&t=Hwprzudi5c4T3sAjFCSs477Mhun73zOMW5n8FrenFVk" alt="Amaro Fashion Logo" />
</p>

## Description

Simulação de passeios dos seus pets. Você pode solicitar alguém para levar o seu pet ao parque, praças e etc. Só indicar a hora e o local.

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

### ATENÇÃO! ⚠ Bugs:
- Nenhum `Login` e `Signup` está funcionando.
- Na hora de criar o passeio no endpoint `CreateWalks`, não formata a hora
- Endpoint `GetWalks` erro cai direto no catch 

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

#### GET WALKS

-   Method: `GET`
-   Path:`/products/?order=name&sort=asc`
-   Output: uma lista com todos os passeios.

#### CREATE WALKS

-   Method: `POST`
-   Path:`/products`
-   Input: `name(string), tags(array de string)`
-   Output: retorna o passeio criado.

## Documentação:
[Postman](---) Não foi realizado a documentação API devido aos erros
[Heroku](---) Não foi realizado o upload devido aos erros

## Teste unitário:
Não foi realizado o teste devido aos erros dos próprios endpoints

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

## Observação
Pelo menos tentei haha
Obrigada a turma e aos instrutores 🧡