const recebeOperador = process.argv[2]
const recebePrimeiroNum = Number(process.argv[3])
const recebeSegundoNum =  Number(process.argv[4])

const operador = () => {
    switch (recebeOperador){
        case "add":
            return recebePrimeiroNum + recebeSegundoNum
        case "mult":
            return recebePrimeiroNum * recebeSegundoNum
        case "sub":
            return recebePrimeiroNum - recebeSegundoNum
        case "div":
            return recebePrimeiroNum / recebeSegundoNum
    } 
}

console.log(operador())