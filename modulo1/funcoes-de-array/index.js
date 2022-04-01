//1. Nome, Apelido, Índice do Array de cada objeto.
//2. Apenas um array dos nomes e apelidos em conjunto.
//3. Retorna true com índice 2

//1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//a)
    const array = pets.map((pet) => {
        return pet.nome
    })
    console.log(array)
//b)
    const petsSalsichas = pets.filter((animais) => {
        return animais.raca === "Salsicha"
    })
    console.log(petsSalsichas)
//c)
    const descontoPoodle = pets.filter((animal) => {
        return animal.raca === "Poodle"
    })
    console.log(descontoPoodle)
    const nomeDescontos = descontoPoodle.map((animal) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o ${animal.nome}`
    })
    console.log(nomeDescontos)

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
    const array1 = produtos.map((produto) => {
        return produto.nome
    })
    console.log(array1)
//b)
    const descontoProduto = produtos.map((produto1) => {
        return{
        nome: produto1.nome,
        preco: produto1.preco * 0.95
        }
    })
    console.log(descontoProduto)
//c)
    const apenasObjetosBebidas = produtos.filter((produto2) => {
        return produto2.categoria === "Bebidas"
    })
    console.log(apenasObjetosBebidas)
//d)
    const apenasPalavrasComYpe = produtos.filter((produto3) => {
        return produto3.nome.includes("Ypê")
    })
    console.log(apenasPalavrasComYpe)
//e)
    const imprimePalavrasComYpe = produtos.map((produto3) => {
        return `Compre ${produto3.nome} por ${produto3.preco}`
    })
    console.log(imprimePalavrasComYpe)

//Desafios
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
//a)
    const nomeEmOrdemAlfabetica = pokemons.map((pokemon) => {
        return pokemon.nome.sort()
    })
    console.log(nomeEmOrdemAlfabetica)