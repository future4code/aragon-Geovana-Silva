const lista = ["Lavar louça", "Limpar o chão", "Levar as roupas na lavanderia", "Arrumar as coisas"]

const adicionarTarefa = () => {
    lista.push(process.argv[2])
    return lista
}

console.log(adicionarTarefa())