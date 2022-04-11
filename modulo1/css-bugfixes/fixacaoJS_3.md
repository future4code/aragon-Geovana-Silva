function calculaNota(ex, p1, p2) {
let mediaPonderada = (p1 + p2 + ex) / 3
    
    if (mediaPonderada >= 9){
      return "A"
    } else if (mediaPonderada >= 7.5){
      return "B"
    } else if (mediaPonderada >= 6){
      return "C"
    } else {
      return "D"
    }
  }
  