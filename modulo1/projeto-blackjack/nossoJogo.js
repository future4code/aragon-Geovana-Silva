/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Cartas: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K - Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)
//As cartas J, Q e K tem valor 10, e a carta A tem valor 11

//Regras: Recebendo 2 cartas - A pontuação de cada jogador é a soma do valor das suas cartas.
//O jogador com a maior pontuação ganha a rodada.


const imprimeBoasVindas = "Boas vindas ao jogo de Blackjack!"
console.log (imprimeBoasVindas)

   if (confirm("Quer iniciar uma nova rodada?") === true) {
      var baralho = [
         {texto: "Ás♠", valor: 11}, 
         {texto: "Ás♣", valor: 11},
         {texto: "Ás♥", valor: 11},
         {texto: "Ás♦", valor: 11},
         //...Continua todas as cartas
      ] 
      let cartaUsuario1 = {valorTotal: 0, cartas: []}
      let cartaUsuario2 = {valorTotal: 0, cartas: []}
      let cartaPc1 = {valorTotal: 0, cartas: []}
      let cartaPc2 = {valorTotal: 0, cartas: []}

      cartaUsuario1.cartas.push(comprarCarta())
      cartaUsuario1.valorTotal = calcularValorCartas(cartaUsuario1.cartas)
      console.log("Usuário 1" + " - cartas:" + listarCartas(cartaUsuario1.cartas) + "- pontuação" + cartaUsuario1.valorTotal)
      
      cartaUsuario2.cartas.push(comprarCarta())
      cartaUsuario2.valorTotal = calcularValorCartas(cartaUsuario2.cartas)
      console.log("Usuário 2" + " - cartas:" + listarCartas(cartaUsuario2.cartas) + "- pontuação" + cartaUsuario2.valorTotal)

   }else{
      console.log("O jogo acabou.")
   }


function listarCartas (cartas) {
   let cartaNomes = ""
   for(let carta of cartas){
      cartaNomes += carta.texto + ", "
   } 
   return cartaNomes
}

function calcularValorCartas (cartas) {
   let valor = 0
   for(let carta of cartas){
      valor += carta.valor
   }
   return valor
}

function comprarCarta () {
   let index = Math.floor(Math.random() * (baralho.length));
   console.log(this.baralho)
   const carta = baralho[index]
   baralho.splice(index, 1)
   console.log(carta, index)
   return carta
}