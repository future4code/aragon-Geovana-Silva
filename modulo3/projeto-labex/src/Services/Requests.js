import axios from 'axios';
import { irParaAdm } from '../Routes/Coordinator';

export const requesicaoLogin = (email, password, navigate) => {
    const body = {
        email: email,
        password: password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/geovana-oliveira-aragon/login",
    body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Login efetuado com sucesso!😍")
        irParaAdm(navigate)
    })
    .catch((err) => {
        alert("Erro! Tente novamente!😔")
    })
}

export const deletarViagem = (viagemId, buscarViagemData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/geovana-oliveira-aragon/trips/${viagemId}`,
    header)
    .then(() => {
        alert("Viagem deletada com sucesso!")
        buscarViagemData()
    })
    .catch((err) => {
        alert("Erro! Tente novamente!😔")
    })
}

export const criarViagem = (body, limpar, buscarViagemData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/geovana-oliveira-aragon/trips",
    body, header)
    .then(() => {
        alert("Viagem criada com sucesso!😊")
        limpar()
        buscarViagemData()
    })
    .catch((err) => {
        alert("Erro!😪", err.message)
    })
}