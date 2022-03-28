//"Matheus Nachtergaele"
//"Virginia Cavendish"
//canal: "Globo", horario: "14h"

//nome: "Juca", idade: 3, raca: "SRD"
//nome: "Juba", idade: 3, raca: "SRD"
//nome: "Jubo", idade: 3, raca: "SRD"
//Copia o modelo dos objetos.

//false
//undefined
//Pois não há chave que se chama [altura]

//Questão 1
const meusApelidos = {
    nome: "Geovana",
    apelidos: [`Geo`,` Jojo`,` Gi`]
}
console.log(`Oi eu sou ${meusApelidos.nome}, mas pode me chamar de: ${meusApelidos.apelidos}`)

const novosApelidos = {
    ...meusApelidos, 
    apelidos: [`Quiron`,` Quiqui`,` Nhonhi`]
}
console.log(`Oi eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos}`)

//Questão 2
const sobreMim = {
    nome: "Geovana",
    idade: 20,
    profissão: "Assistente de tecnologia",
    funcao: () => {
        const array = [nome, nome.length, idade, profissão, profissão.length]
        console.log(array)
    }
}
console.log(sobreMim)
//Tentei

//Questão 3
//Não consigo interpretar a questão.


//Desafios
const informacoesDoUsuario = function () {
    const nomeDoUsuario = prompt("Qual é o seu nome?")
    const idadeDoUsuario = prompt("Qual é a sua idade?")
    const profissaoDoUsuario = prompt("Qual é a sua profissão?")
    const sobreOUsuario = {
        nome:nomeDoUsuario ,
        idade:idadeDoUsuario ,
        profissão:profissaoDoUsuario
    }
    console.log(Typeof.sobreOUsuario)
}
//Tentei