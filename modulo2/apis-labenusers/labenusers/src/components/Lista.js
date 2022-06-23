import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    border-radius: 50px;
    border-color: #AD4621;
    border-width: 2px;
    font-size: 18px;
        button {
            border: none;
            border-radius: 10px;   
            background-color: #AD4621;
            color: #FFF;
        } button: hover {
            background-color: #FF6830;
            color: #000;
        }
`
const TelaLista = styled.div`
    h2 {
        color: #AD4621;
        font-size: 40px;
        padding: 14px;
        margin: 1px;
    } button {
        border: none;
        border-radius: 20px;
        color: #FFF;
        background-color: #AD4621;
    } button: hover {
        background-color: #FF6830;
        color: #000;
    }
`

export default class Lista extends React.Component{
    state = {
        usuarios: []
    }

componentDidMount() {
    this.pegarUsuarios()
}

pegarUsuarios = async() => {
    const link = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    try {
        const res = await axios.get(link, {
            headers: {
                Authorization: "geovana-oliveira-aragon"
            }
        })
        this.setState({usuarios: res.data})
    } catch (err) {
        alert("Erro! :(")
    }
}

deletarUsuario = (id) => {
    const link = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(link, {
        headers: {
            Authorization: "geovana-oliveira-aragon"
        }
    })
    .then((res) => {
        alert ("Usuário deletado com sucesso! :)")
        this.pegarUsuarios()
    })
    .catch((err) => {
        alert ("Erro! :(")
    })
}


    render () {
        const listaDeUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
            <button onClick={() => this.deletarUsuario(user.id)}> X </button>
            </CardUsuario>
            )
        })
        return (
            <TelaLista>
            <div>
                <button onClick={this.props.paraCadastro}><b> Cadastro </b></button>
                <h2> Lista de usuários </h2>
                {listaDeUsuarios}
            </div>
            </TelaLista>
        )
    }
}