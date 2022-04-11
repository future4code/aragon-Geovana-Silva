function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const resultado1 = valorTotalVendas * 0.05
  const resultado2 = resultado1 + (100 * qtdeCarrosVendidos) + 2000
  return resultado2  
}