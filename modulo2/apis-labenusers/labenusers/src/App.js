import React from "react";
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista";

export default class App extends React.Component {
  state = {
    telaAtual: "Cadastro"
  }

changeTela = () => {
  switch(this.state.telaAtual){
    case "Cadastro":
      return <Cadastro paraLista={this.paraLista}/>
    case "Lista":
      return <Lista paraCadastro={this.paraCadastro}/>
    default:
      return <div>Erro! Não encontrei a página. :c</div>
  }
}

paraCadastro = () => {
  this.setState({telaAtual: "Cadastro"})
}

paraLista = () => {
  this.setState({telaAtual: "Lista"})
}

render () {
  return (
    <div>
      {this.changeTela()}
    </div>
  )
}
}