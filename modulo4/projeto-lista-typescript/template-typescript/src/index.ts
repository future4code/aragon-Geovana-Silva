// //1
// function verificaTipo (param: any): void{
//     if (typeof param === "number"){
//         console.log("number")
//     } if (typeof param === "string"){
//         console.log("string")
//     } if (typeof param === "boolean"){
//         console.log("boolean")
//     } else {
//         console.log("undefined")
//     }
// }
// console.log(verificaTipo(8))
// console.log(verificaTipo("Eu"))
// console.log(verificaTipo(10 === 10))


// //2


// //3
// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }
// type CONTA = {
//     nome: string,
//     anoDeLancamento: number,
//     genero: string,
//     pontuacao?: number
// }
// function teste(nome: string, anoDeLancamento: number, genero: GENERO, pontuacao?: number): CONTA {
//     if (pontuacao) {
//         return {
//             nome: nome,
//             anoDeLancamento: anoDeLancamento,
//             genero: genero,
//             pontuacao: pontuacao
//         }
//     } else {
//         return {
//             nome: nome,
//             anoDeLancamento: anoDeLancamento,
//             genero: genero
//         }
//     }
// }
// console.log(teste("Duna", 2021, GENERO.ACAO))


// //4
// enum SETORES {
//     MARKETING = "marketing",
//     VENDAS = "vendas",
//     FINANCEIRO = "financeiro"
// }
// type PESSOAS = {
//     nome: string,
//     salário: number,
//     setor: SETORES,
//     presencial: boolean
// }
// const colaboradores: PESSOAS[] = [
// 	{ nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
// ]
// function verificaSetores (colaboradores:PESSOAS[]):PESSOAS[]{
//     const listaMarketing = colaboradores.filter(lista => lista.setor === "marketing")
//     const listaPresencial = [...listaMarketing]
//     const verificando = listaPresencial.filter(lista => lista.presencial === true)
//     return verificando
// }
// console.log(verificaSetores(colaboradores))


// //5
// type USUARIOS = {
//     name: string,
//     email: string,
//     role: string
// }
// const usuario:USUARIOS[] = [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ]
// function verificaRoles (usuario:USUARIOS[]):string[]{
//     return usuario.filter(roles => roles.role === "admin").map(
//         roles => roles.email)
// }
// console.log(verificaRoles(usuario))


// //6
// type CLIENTES = {
//     cliente: string,
//     saldoTotal: number,
//     debitos: number[]
// }
// const clientes:CLIENTES[] = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]
// function debitos (clientes:CLIENTES[]):CLIENTES[]{
//     return clientes.map(pessoa => {
//         for(let debito of pessoa.debitos){
//             pessoa.saldoTotal = pessoa.saldoTotal - debito
//         }
//         return pessoa
//     }).filter(pessoa => pessoa.saldoTotal <= 0)
// }
// console.log(debitos(clientes))

// //7
type PRODUTOS = {
    nome: string,
    quantidade: number,
    valorUnitario: number|string
}
const estoque: PRODUTOS[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]
const ajustaPreco = (preco:number):string => {
	const valorAjustado:string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}
const estoqueOrdenado = (estoque:PRODUTOS[]):PRODUTOS[] => {
    const copiarEstoque = [...estoque]
    //Não sei corrigir os valor unitários da função ajustarpreço
    const resultado:PRODUTOS[] = copiarEstoque.sort((a:PRODUTOS, b:PRODUTOS) => {
        if (a.quantidade < b.quantidade)
            return -1;
        if (a.quantidade > b.quantidade)
            return 1;
        return 0;
        })
    return resultado
}
console.log(estoqueOrdenado(estoque))

// //8
//    Se =<25 terá que renovar de 5 em 5 anos
//    Se 26 a =<50 terá que renovar de 10 em 10 anos
//    Se >50 terá que renovar de 15 em 15 anos

// function renovaSe (dataNascimento: string, dataEmissao: string):boolean{
//     // const dataDeNascimento = new Date(dataNascimento)
//     // const dataDeEmissao = new Date(dataEmissao)
//     //     let tempoNascimento = dataDeNascimento.getTime()
//     //     let tempoEmissao = dataDeEmissao.getTime()
//     // const idade = //Data atual - Data nascimento
//     // const renovar  = //Data atual - Data emissão
//     return
// }

