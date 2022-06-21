
    let clientes = [
        { id: 1, nome: "Fulano" },
        { id: 2, nome: "Ciclano" },
        { id: 3, nome: "Beltrano" },
        { id: 4, nome: "Fulana" }
    ]

    const adicionarClientes = (cliente) => {
        let i = clientes.findIndex(obj => obj.id === cliente.id)
        if (i < 0){
            clientes.push(cliente)
            return clientes
        } else {
            return `Erro! ${cliente.id} está sendo usado.`
        }
    }

adicionarClientes({id: 8, nome: "Liliana"})
adicionarClientes({id: 5, nome: "Duda"})
adicionarClientes({id: 2, nome: "Laura"})
adicionarClientes({id: 7, nome: "Fulano"})