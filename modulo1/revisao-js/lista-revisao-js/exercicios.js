// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maximoNumero = Math.max(...array)
    return maximoNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
        const escaleno = ladoA === ladoB === ladoC
        const isosceles = ladoA === ladoB || ladoB === ladoC || ladoA === ladoC
        if (escaleno == true) {
            console.log("Escaleno!")
        } else if (isosceles == true) {
            console.log("Isósceles!")
        } else {
            console.log("Equilátero!")
        }
    }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const informacoesDoFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    } 
    const atoresToString = informacoesDoFilme.atores.toString()
    const atoresToStringComEspaco = atoresToString.replace(/,/g,", ")
    return `Venha assistir ao filme ${informacoesDoFilme.nome}, de ${informacoesDoFilme.ano}, dirigido por ${informacoesDoFilme.diretor} e estrelado por ${atoresToStringComEspaco}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]
    const altura = pessoas.map((alturaMin) => {
        return {
            nome: pessoas.altura >= 1.5
        }
    })
    return altura
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}