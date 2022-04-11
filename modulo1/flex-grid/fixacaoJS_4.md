function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contar = 0
    for (let numero of arrayDeNumeros){
       if(numero === numeroEscolhido){
         contar = contar + 1   
       }      
    }   
     if(contar > 0){
       return `O número ${numeroEscolhido} aparece ${contar}x`
     }else {
       return `Número não encontrado`
     }  
}