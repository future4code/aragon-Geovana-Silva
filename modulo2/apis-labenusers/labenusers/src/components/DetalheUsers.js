import React from "react";
import axios from "axios";

const axiosConfig = {
    headers: {
        Authorization: "geovana-oliveira-aragon"
    }
};

class DetalheUsers extends React.Component {
    state = {
        DetalheUsers: {},
        userEdition: "editarButtom",
        name: "",
        email: ""
    };

componentDidMount() {
    this.getDetalheUsers();
}

getDetalheUsers = () => {
    axios
        .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
            this.props.userId
        }`,
        axiosConfig
        )
        .then(response => {
            this.setState({DetalheUsers: response.data});
        })
        .catch(err => {
            console.log(err);
        });
    };

changeUserEditionFiel = () => {
    if (this.state.userEdition === "editarButtom") {
        this.setState({ userEdition: "userEditForm" });
    } else {
        this.setState({ userEdition: "editarButtom" });
    }
};

handleNameChange = event => {
    const valorNome = event.target.value;
        this.setState({ name: valorNome });
    };

handleEmailChange = event => {
    const valorEmail = event.target.value;
        this.setState({ email: valorEmail });
};

handleCreateUser = () => {
    const body = {
        name: this.state.name,
        email: this.state.email
    };
    axios
        .put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
                this.props.userId
        }`,
        body,
        axiosConfig
        )
        .then(() => {
            this.setState({name: "", email: ""});
            this.getDetalheUsers();
            this.changeUserEditionFiel();
                alert(`Usuário ${this.state.name} editado com sucesso!`);
        })
        .catch(error => {
            alert("ERRO AO CRIAR O USUÁRIO!!!");
            console.log(error);
        });
    };

render() {
    const userEdition =
        this.state.userEdition === "editarButtom" ? (
            <button onClick={this.changeUserEditionFiel}> Editar usuário </button>
        ) : (
        <div>
            <input
                placeholder = "Nome"
                type = "text"
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            <input
                placeholder = "E-mail"
                type = "email"
                value={this.state.email}
                onChange={this.handleEmailChange}
            />
            <button onClick={this.handleCreateUser}> Salvar edição </button>
        </div>
        );

return (
        <div>
            <div>
                <p>{this.state.DetalheUsers.name}</p>
                <p>{this.state.DetalheUsers.email}</p>
            </div>
            <div> {userEdition} </div>
            <hr />
                <button onClick={this.props.changePage}>
                    Voltar para lista de usuários
                </button>
        </div>
);
}
}

export default DetalheUsers;
