function calculaPrecoTotal(quantidade) {
  if (quantidade < 12){
    let resultado = quantidade * 1.30
    return resultado
  }else{
    let resultado = quantidade * 1
    return resultado
  }
}