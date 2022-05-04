import React from "react";
import axios from "axios";
import DetalheUsers from "./DetalheUsers";

const axiosConfig = {
    headers: {
        Authorization: "geovana-oliveira-aragon"
    }
};

class Users extends React.Component {
    state = {
        usersList: [],
        currentPage: "usersList",
        id: "",
        name: ""
    };

componentDidMount() {
    this.fetchListaDeUsuario();
}

fetchListaDeUsuario = () => {
    axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            axiosConfig
        )
        .then(response => {
            this.setState({usersList:response.data});
        });
    };

handleDeletarUsuario = userId => {
    if (window.confirm("Confirma para apagar o usuário?")) {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                axiosConfig
            )
            .then(() => {
                alert("Usuário apagado com sucesso!");
                this.fetchListaDeUsuario();
            })
            .catch(e => {
                alert("ERRO AO APAGAR O USUARIO!!!");
        });
    }
};

changePage = userId => {
    if (this.state.currentPage === "usersList") {
        this.setState({currentPage:"DetalheUsers", userId:userId});
    } else {
        this.setState({currentPage:"usersList", userId:""});
    }
};

handleNameChange = event => {
    const valorNome = event.target.value;
    this.setState({name: valorNome});
    };

handleSearchUser = () => {
    axios
        .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name
            }&email=`,
        axiosConfig
        )
        .then(response => {
            this.setState({usersList: response.data});
        })
        .catch(error => {
            alert("ERRO AO CRIAR O USUÁRIO!!!!");
            console.log(error);
        });
};

render() {
    return (
        <div>
            {this.state.currentPage === "usersList" ? (
        <div>
        <ul>
            {this.state.usersList.length === 0 && <div> Carregando... </div>}
            {this.state.usersList.map(user => {
                return (
                <li>
                    <span onClick={() => this.changePage(user.id)}>
                        {user.name}
                    </span>
                    <DeleteButton onClick={() => this.handleDeletarUsuario(user.id)}>
                        X
                    </DeleteButton>
                </li>
                );
            })}
                </ul>
                <hr />
                <h4> Procurar o usuário </h4>
                <input
                    placeholder = "Nome exato para busca"
                    type = "text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
            <button onClick={this.handleSearchUser}> Salvar edição </button>
        </div>
        ) : (
    <DetalheUsers userId={this.state.userId} changePage={this.changePage} />
    )}
        </div>
    );
}
}

export default Users;
