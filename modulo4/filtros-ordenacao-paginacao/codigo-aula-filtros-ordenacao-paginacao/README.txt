# LabeProducts 🛍

Projeto que visa verificar produtos que contém na lista. Você pode incluir, alterar, ordenar, filtrar e até deletar alguns produtos da lista.

### 📋 Como acessar
Você pode acessar a documentação através do link: https://documenter.getpostman.com/view/20785860/UzQxMPe8

-> visualizar a lista de usuários usando o método GET /products (getProducts)
	. Você pode filtrar!
		> Query para você digitar o produto que você quer ver
		> Order para você selecionar ordem por preço entre Desc.(descrescente) ou Asc.(Crescente)
		> Nele já está selecionado as páginas e limites de visualização para não "sujar" a lista.

-> adicionar novos produtos utilizando o método POST /products (createProduct)
	. Basta criar!
		> Id para identificação do produto
		> Name para nomear o produto
		> Price para o preço do produto

-> editar o preço do produto com o método PUT /products/:id (updatePriceProduct)
	. Primeiro precisa selecionar a ID
		> Id para identificar a existência do produto
		> Caso exista, só mudar o price!

-> deletar o produto com o DELETE /products/:id (deleteProduct)
	. Como a anterior, precisa selecionar a ID
		> Id para identificar a existência do produto
		> Produto deletado com sucesso!

## 🛠️ Construído com
-- Postman | Rest Client
-- BKeeper
-- VSCode

## 💻 Tecnologias
-- SQL
-- Knex
-- TypesCript
-- Express

## ✒️ Autores

-- Geovana Oliveira (www.github.com/geovanaolis)

## 🎁 Expressões de gratidão

* Eu disse que melhoraria?
* Aprendi como lidar com "caminho feliz" e depois fazer as regras!
* Tenho muito o que aprender ainda! Mas, obrigada instrutores! :) 