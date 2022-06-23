import axios from "axios";
import React from "react";
import styled from "styled-components";

const TelaCadastro = styled.div`
    text-align: center;
        h2 {
            font-size: 50px;
            font-style: Arial;
            color: #AD4621;
        } button {
            border: none;
            border-radius: 20px;
            margin: 5px;
            padding: 7px;
            color: #FFF;
            background-color: #AD4621;
        } button: hover {
            background-color: #FF6830;
            color: #000;
        } input {
            border-radius: 20px;
            border-color: #AD4621;
            border-width: 2px;
            width: 200px;
        }
`

class Cadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

handleNome = (e) => {
    this.setState({nome: e.target.value})
}

handleEmail = (e) => {
    this.setState({email: e.target.value})
}

cadastrarUsuario = () => {
    const link = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        name: this.state.nome,
        email: this.state.email
    }
    
    axios.post(link, body, {
        headers: {
            Authorization: "geovana-oliveira-aragon"
        }
    })
    .then((res) => {
        alert("Usuário(a) cadastrado(a) com sucesso! :)")
        this.setState({nome: "", email: ""})
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

render () {
    return (
        <TelaCadastro>
        <div>
            <button onClick={this.props.paraLista}><b> Lista de usuários </b></button>
            <h2> Cadastro </h2>
            <input 
                placeholder="Nome"
                value={this.state.nome}
                onChange={this.handleNome}
            />
            <input 
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.handleEmail}
            />
            <button onClick={this.cadastrarUsuario}><b> Cadastrar </b></button>
        </div>
        </TelaCadastro>
        )
    }
}

export default Cadastro;