//Questão 1: (10), (50), Nada
//Questão 2: Diminui as letras (tornam minúsculas) e verifica se tem a palavra cenoura no texto.
    //I eu gosto de cenoura, true
    //II cenoura é bom pra vista, true
    //III cenouras crescem na terra, false

//Questão 1
function imprimirFrase(){
        const frase = "Eu sou a Geovana, tenho 20 anos, moro em Belo Horizonte e sou estudante."
        return frase
}

//Letra B
function informacoesSobre(){
    const nome = prompt("Qual é o seu nome?")
    const idade = prompt("Quantos anos você tem?")
    const cidade = prompt("Que cidade você mora?")
    const profissao = prompt("Qual é a sua profissão?")
        const idadeNumber = Number(idade)
            const sobreOUsuario = `Eu sou ${nome}, tenho ${idadeNumber}, moro em ${cidade} e sou ${profissao}.`
                console.log(sobreOUsuario)
} //Tive muuuuita dificuldade nessa :c


//Questão 2
//Letra A
function soma(a, b){
    return a + b
}
soma(2, 3)

//Letra B
function maiorOuigual(a1, a2){
    return a1>=a2
}
maiorOuigual(1, 2)

//Letra C
function parOuImpar(b1, b2){
    const resto1 = b1%2
    const resto2 = b2%2
        const boolean1 = resto1 === 0
        const boolean2 = resto2 === 0
            return `${b1} é par? ${boolean1}. E ${b2}? ${boolean2}.`
}
parOuImpar(3, 2)

//Letra D
//function mensagem(const mensagemDoUsuario = prompt("Insira uma mensagem.")){
    //return mensagemDoUsuario.length, mensagemDoUsuario.toUpperCase()
//}
//Não consigo :c

//Questão 3
function calculadora(num1, num2){
    const soma = num1 + num2
    const diferenca = num1 - num2
    const multiplicacao = num1 * num2
    const divisao = num1 / num2
        console.log("SOMA", soma)
        console.log("DIFERENÇA", diferenca)
        console.log("MULTIPLICAÇÃO", multiplicacao)
        console.log("DIVISÂO", divisao)
}
calculadora(30, 3)

//Desafios
//Desafio 1
const somar = (n1) => {
    console.log(n1)
        const somar2 = (n2, n3) => {
            const somado = n2 + n3
        }
        somar2(3, 5)
}
somar(somado)
//Sem retorno, ficou difícil :/

//Desafio 2
function teoremaPitagoras(c1, c2,){
    const catetos = (c1**2) + (c2**2)
    const hipotenusa = Math.sqrt(catetos)
        return hipotenusa
}
teoremaPitagoras(5, 6)