# LabePerfumes 💎

Projeto que visa verificar perfumes que contém na lista. Você pode incluir, alterar, ordenar, filtrar e até deletar alguns perfumes da lista.

### 📋 Como acessar
Você pode acessar a documentação através do request.rest na raiz da pasta

-> visualizar a lista de perfumes usando o método GET /perfumes (getPerfumes)
	. Você pode filtrar!
		> Query para você digitar o produto que você quer ver
		> Order para você selecionar ordem por preço entre Desc.(descrescente) ou Asc.(Crescente)
		> Nele já está selecionado as páginas e limites de visualização para não "sujar" a lista.

-> adicionar novos perfumes utilizando o método POST /perfumes (createPerfumes)
	. Basta criar!
		> Name para nomear o perfume
		> Brand para marca do perfume
		> Price para o preço do perfume
		> ml para volume do perfume

-> editar o preço do perfume com o método PUT /perfumed/:id (updatePerfume)
	. Primeiro precisa selecionar a ID
		> Id para identificar a existência do perfume
		> Caso exista, só mudar o price!

-> deletar o produto com o DELETE /perfumes/:id (deletePerfume)
	. Como a anterior, precisa selecionar a ID
		> Id para identificar a existência do perfume
		> Produto deletado com sucesso!

## 🛠️ Construído com
-- Rest Client
-- BKeeper
-- VSCode

## 💻 Tecnologias
-- SQL
-- Knex
-- TypesCript
-- Express
-- Query Builders

## ✒️ Autores

-- Geovana Oliveira (www.github.com/geovanaolis)