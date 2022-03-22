//Questão 1 - a. false, b. false, c. false, d. string
//Questão 2 - Esqueceu de converter o prompt que é string para number
//Questão 3 - 
//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")
//let number1 = Number(primeiroNumero)
//let number2 = Number(segundoNumero)
//const soma = number1 + number2
//console.log(soma)

//1
let idadeDoUsuário = prompt("Insira a sua idade.")
let idadeDoAmigo = prompt("Insira a idade do seu amigo(a).")
    let condicao = idadeDoUsuário > idadeDoAmigo
    let diferenca = idadeDoUsuário - idadeDoAmigo
        console.log("Sua idade é maior do que a do seu melhor amigo(a)?", condicao)
        console.log("A diferença de idade entre vocês é", diferenca)

//2
let idadeMeses = idadeDoUsuário * 12
let idadeEmDias = idadeMeses * 30
let idadeEmHoras = idadeEmDias * 24
    console.log("A sua idade para meses é", idadeMeses)
    console.log("A sua idade em dias é", idadeEmDias)
    console.log("A sua idade em horas é", idadeEmHoras)

//3
let primeiraOperacao = prompt("Insira um número.")
let segundaOperacao = prompt("Insira outro número.")
    let operacao1 = Number(primeiraOperacao)
    let operacao2 = Number(segundaOperacao)
        let condicao1 = operacao1 > operacao2
        let condicao2 = operacao1 === operacao2
        let condicao3 = operacao1 % operacao2
        let condicao4 = operacao2 % operacao1
            console.log("O primeiro número é maior que segundo?", condicao1)
            console.log("O primeiro número é igual ao segundo?", condicao2)
            console.log("O primeiro número é divisível pelo segundo?", condicao3 === 0)
            console.log("O segundo número é divisível pelo primeiro?", condicao4 === 0)

//Desafio
let celsius =  celsius / 5
let fahrenheit =  fahrenheit - 32 / 9
let kelvin =  kelvin - 273 / 5
    let fToK = fahrenheit=kelvin
    let cToF = celsius=fahrenheit
    let cToFK = celsius=fahrenheit=kelvin
//Não consigo continuar o desafio :c