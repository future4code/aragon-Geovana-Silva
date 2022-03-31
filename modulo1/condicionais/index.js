//Questão 1
//Teste se o número é par (restante zero após dividir a metade)
//Qualquer número par
//Números ímpares

//Questão 2
//Determina os preços das frutas inseridas pelo usuário
//2.25
//5

//Questão 3
//Se o número que o usuário solicitou é maior que zero
//10 = "Esse número passou no teste", -10 = "Essa mensagem é secreta!!!"
//Porque colocou o let mensagem ao invés de else para dizer "senão"

//1
let idadeHabilitacao = prompt("Qual é a sua idade?")
    let idadeNumber = Number.idadeHabilitacao
    if (idadeNumber >= 18){
        console.log("Você pode dirigir!")
    }else{
        console.log("Você não pode dirigir.")
    }

//2
let turno = prompt("Em que turno você estuda? Coloque M(Matutino), V(Vespertino) ou N(Noturno)")
    if (turno === "M"){
        console.log("Bom dia!")
    }else if (turno === "V"){
        console.log("Boa tarde!")
    }else{
        console.log("Boa noite!")
    }
//3
let turnoHorario = prompt("Em que turno você estuda? Coloque M(Matutino), V(Vespertino) ou N(Noturno)")
    switch(turnoHorario){
        case `M`:
        console.log("Bom dia!")
        break
        case `V`:
        console.log("Boa tarde!")
        break
        default:
            console.log("Boa noite!")
            break
}

//4
let filme = prompt("Qual é o gênero do filme que irá assistir?")
let ingresso = prompt("Qual é o preço do ingresso?")
    let valorIngresso = Number.ingresso
    let valorFilme = filme.toLowerCase
    let comparacao = valorFilme === "fantasia"
    let comparacao1 = valorIngresso <= 15
    if (comparacao&&comparacao1 === true){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme.")
    }

//Desafios
//1 Não cheguei a debugar o questão 4

//2
const jogoDoDia {
Nome: prompt("Qual é o seu nome?"),
Tipo: prompt("Qual é o tipo de jogo? IN para Internacional e DO para Doméstico."),
Etapa: prompt("Qual é o tipo de jogo? SF para SemiFinal, DT para Decisão em Terceiro Lugar e FI para Final."),
Categoria: prompt("Escolha as categorias: 1, 2, 3 ou 4."),
Quantidade: prompt("Quantidade de ingressos.")
}

    switch(categoria, tipoDeJogo){
        case `1`&&`SF`:
            console.log(1320 * quantidade)
            break
        case `1`&&`DT`:
            console.log(660 * quantidade)
            break
        case `1`&&`FI`:
            console.log(1980 * quantidade)
            break
        case `2`&&`SF`:
            console.log(880 * quantidade)
            break
        case `2`&&`DT`:
            console.log(440 * quantidade)
            break
        case `2`&&`FI`:
            console.log(1320 * quantidade)
            break
        case `3`&&`SF`:
            console.log(550 * quantidade)
            break
        case `3`&&`DT`:
            console.log(330 * quantidade)
            break
        case `3`&&`FI`:
            console.log(880 * quantidade)
            break
        case `4`&&`SF`:
            console.log(220 * quantidade)
            break
        case `4`&&`DT`:
            console.log(170 * quantidade)
            break
        default:
            console.log(330 * quantidade)
    }
//Tentei