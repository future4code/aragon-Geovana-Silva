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

//1.
const imrimeBoasVindas = "Boas vindas ao jogo de Blackjack!"
console.log (imrimeBoasVindas)

//2.
   if (confirm(prompt("Quer iniciar uma nova rodada?")) {
      console.log("O jogo acabou")
   }else{
      console.log()
   }