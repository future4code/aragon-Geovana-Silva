const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

let juntar = {}
    for (let i = 0; i < primeiraLista.length; i++){
        juntar[primeiraLista[i].nome] = primeiraLista[i]
    }
    for (let i = 0; i < segundaLista.length; i++){
        juntar[segundaLista[i].nome] = segundaLista[i]
    }
    
    juntar = Object.values(juntar)

    console.log(juntar)