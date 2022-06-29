const objeto = {
    id: 1,
    name: "Derek",
    email: "derek@email.com"
}

const objeto1 = {
    id: 2,
    name: undefined,
    email: "aragon@1.com"
}

const objeto2 = {}

const validar = (objeto) => {
    let erro = []
    
    Object.keys(objeto).forEach((i) => {
        if(objeto[i] === undefined){
            erro.push(i)
        }
    })
    if(Object.keys(objeto).length === 0){
        return{
            Erro: true,
            Erros: ":( não encontrei nada aqui"
        }
    }else if (erro.length === 0){
        return{
            Erro: false,
            Erros: erro
        }
    }else{
        return{
            Erro: true,
            Erros: erro
        }
    }
}

console.log(validar(objeto))
console.log(validar(objeto1))
console.log(validar(objeto2))
