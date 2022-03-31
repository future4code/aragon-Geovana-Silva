//1. a) Soma o valor inicial com o valor2 que se for maior que 5, para. b) 10
//2. a) [19, 21, 23, 25, 27, 30] b) for e of já é utilizado, e já acessa o índice.
//3. Imprime 3 linhas

//1
const quantidadeDePets = Number(prompt("Quantos animais você tem?"))
const condicaoTemBichos = quantidadeDePets > 0
const condicaoNãoTemBichos = quantidadeDePets === 0
const arrayPets = []
    if (condicaoNãoTemBichos) {
        console.log("Que pena! Você pode adotar um pet!")
    } else if (condicaoTemBichos) {
        for (let i = 0; i < quantidadeDePets; i++)
        arrayPets.push(prompt("Cite os nomes dos bichos."))
    }
    console.log(arrayPets)

//2
//a)
const array = [10, 20, 30, 45, 55, 65, 70]
function imprimeCadaValor (){
    for (let i=0; i <= array.length; i++){
        const elemento = array[i]
    } 
    console.log(elemento)}
//b) 
function imprimeCadaValorDividos10 (array){
    for (let i=0; i/10; i++){
        const elemento = array[i]
    } 
    return elemento}
//c)
function imprimeCadaValorPar (array){
    for (let i=0; i%2 === 0; i++){
        const elemento = array[i]
    } 
    return elemento}
//d)
//Estou tendo muitas dificuldades com o restante pela falta de interpretação, infelizmente vou parar por aqui. 