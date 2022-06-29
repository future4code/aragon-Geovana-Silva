//1 -> Utilizando o operador | ou
let ano: string | number = "2011"
ano = 2011

//2
enum COR_FAVORITA {
    Red= "Vermelho",
    Green= "Verde",
    Orange= "Laranja",
    Yellow= "Amarelo",
    Blue= "Azul",
    Black= "Preto",
    White= "Branco",
    Brown= "Marrom",
    Pink= "Rosa",
    Purple= "Roxo",
    Grey= "Cinza"
}
type MinhaPessoa = {
    nome: string,
    idade: number,
    corFavorita: COR_FAVORITA
}
let geovana: MinhaPessoa = {
    nome: "Geovana",
    idade: 21,
    corFavorita: COR_FAVORITA.Green
}
console.log(geovana)

//3
type Media = {
    media: number,
    maior: number,
    menor: number
}
function obterEstatisticas(numeros: number[]):Media {
    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )
    let soma = 0
    for (let num of numeros){
        soma += num
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
console.log(obterEstatisticas([10, 8, 5, 6, 9, 10]))

//4
type Post = {
    autor: string,
    texto: string
}
const posts:Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]
function buscarPostsPorAutor(posts:Post[], autorInformado:string):Post[] {
    return posts.filter(
        (post) => {
        return post.autor === autorInformado
        }
    )
}
console.log(buscarPostsPorAutor(posts, "Hermione Granger"))
