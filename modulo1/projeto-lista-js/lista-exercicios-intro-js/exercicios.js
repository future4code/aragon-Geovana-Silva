// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    const altura = prompt("Digite a altura.")
    const largura = prompt("Digite a largura.")  
    const area = altura * largura
    console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
    const anoAtual = prompt("Qual é o ano atual?")
    const anoNascimento = prompt("Qual é ano do seu nascimento?")
    const idade = anoAtual - anoNascimento
    console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    const imc = peso / (altura * altura)
    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    const nome = prompt("Qual é o seu nome?")
    const idadeDoUsuario = prompt("Qual é a sua idade?")
    const email = prompt("Qual é o seu email?")
    console.log(`Meu nome é ${nome}, tenho ${idadeDoUsuario} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    const cores = prompt("Cite cor favorita 1.")
    const cores1 = prompt("Cite cor favorita 2.")
    const cores2 = prompt("Cite cor favorita 3.")
    const arrayCores = [cores, cores1, cores2]
    console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    const ingresso = custo/valorIngresso
    return ingresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    const strings = string1.length === string2.length
    return strings
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    const elemento = array[0]
    return elemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    const elemento1 = array[array.length - 1]
    return elemento1 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
//Difícil :c
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    const corda1 = string1.toUpperCase()
    const corda2 = string2.toUpperCase() 
    const strings1 = corda1 === corda2
    return strings1
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    const oAnoAtual = prompt("Insira o ano atual.")
    const anoDeNascimento = prompt("Insira o ano de nascimento.")
    const anoDaIndentidade = prompt("Insira o ano da emissão da identidade.")
    const usuarioIdade = oAnoAtual - anoDeNascimento
      const eSe = usuarioIdade >= 20 && anoAtual - anoDaIndentidade === 5     
}
//Difícil :c

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}
//Complicado para mim

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    const pergunta1 = prompt("Você tem mais de 18 anos?")
    const pergunta2 = prompt("Você possui ensino médio completo?")
    const pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
    const resposta1 = pergunta1.toLowerCase()
    const resposta2 = pergunta2.toLowerCase()
    const resposta3 = pergunta3.toLowerCase()
      const respostaCerta = (resposta1 && resposta2 && resposta3) === "sim"
      const respostaErrada = (resposta1 || resposta2 || resposta3) === "não"
        if (respostaCerta === true){
          console.log(respostaCerta)
        } else (respostaErrada = !true)
        }
//Tentei