// 1 - 10, 5
// 2 - 10, 20, 10
// 3 - "Você recebe", recebePorDia, "/", horasTrabalhoPorDia, "por hora"

// Questão 1
let nome
    console.log(typeof nome)
let idade
    console.log(typeof idade)
// Não foi atribuído um valor, por isso ficou no undefined

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
    console.log(typeof nome)
    console.log(typeof idade)
// Ambos foram identificadas como string, pois toda prompt é string!

console.log("Olá", nome,", você tem", idade, "anos.")

// Questão 2
let roupa = prompt("Você está com roupa preta?")
let sistemaOperacional = prompt("Você usa sistema operacional Windows?")
let comida = prompt("Você está comendo?")
    console.log(roupa, sistemaOperacional, comida)

// Questão 3
let a = 10
let b = 25
    c = b
    b = a
    a = c
        console.log("O novo valor de a é", a) // O novo valor de a é 25
        console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio
let A = prompt("Insira um número da categoria A")
let B = prompt("Insira um número da categoria B")
    let numberA = number(A)
    let numberB = number(B)
        A+B
        A*B
            console.log("O valor de A+B é", A+B)
            console.log("O valor de A*B é", A*B)
// Não consegui encontrar uma resposta, mas tentei.

