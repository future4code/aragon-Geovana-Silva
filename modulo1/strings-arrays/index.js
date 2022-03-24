// a. undefined
// b. null
// c. [10]
// d. [0]
// e. Não sei
// f. Não sei
//Questão 2: "SUBI NO ONIBUS EM MIRROCOS"

//QUestão 1
let nome = prompt("Qual é o seu nome?")
let email = prompt("Qual é o seu e-mail?")
    console.log("O e-mail", email.trim(), "foi cadastrado com sucesso. Seja bem-vinda(o),", nome, "!")

//Questão 2
const comidasPreferidas = ["Yakisoba", "Frango xadrez", "Sushi", "Doce de leite", "Strognoff"]
    console.log(comidasPreferidas)
    console.log(comidasPreferidas[0])
    console.log(comidasPreferidas[1])
    console.log(comidasPreferidas[2])
    console.log(comidasPreferidas[3])
    console.log(comidasPreferidas[4])
        let comidaDoUsuario = prompt("Qual é a sua comida preferida?")
                comidasPreferidas.splice(1, 1, comidaDoUsuario)
                    console.log(comidasPreferidas)

//Questão 3
let listaDeTarefas = [prompt("Liste primeira tarefa a realizar."), prompt("Agora a segunda tarefa."), prompt("Terceira tarefa.")]
    console.log(listaDeTarefas)
        let tarefasRealizadas = prompt("Digite o número da tarefa realizada (0, 1 ou 2).")
            listaDeTarefas.splice(tarefasRealizadas, 1)
                console.log(listaDeTarefas)

//Desafios
let frase = prompt("Digite uma frase.")
    let arrayFrase = frase.split(' ')
        console.log(arrayFrase)

let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    console.log(array)
        let indiceDoAbacaxi = array.indexOf("Abacaxi")
            let tamanhoDaArray = array.length
                console.log("O índice do Abacaxi é", indiceDoAbacaxi, "e a array tem", tamanhoDaArray, "elementos.")