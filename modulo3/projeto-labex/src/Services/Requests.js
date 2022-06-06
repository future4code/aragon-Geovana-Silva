import axios from 'axios';
import { irParaAdm } from '../Routes/Coordinator';

export const requesicaoLogin = (
    email, 
    password, 
    navigate
) => {
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

export const deletarViagem = (
    viagemId, 
    buscarViagemData
) => {
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

export const criarViagem = (
    body, 
    limpar, 
    buscarViagemData
) => {
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

export const enviarCandidatura = (
    body,
    viagemId,
    limpar
) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/geovana-oliveira-aragon/trips/${viagemId}/apply`,
    body)
    .then(() => {
        alert("Candidatura enviada!")
        limpar()
    })
    .catch((err) => {
        alert("Erro! Tente novamente!😥")
    })
}

export const decidirCandidato = (
    viagemId,
    candidatoId,
    decisao,
    buscarViagemDetalhada
) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    const body = {
        approve: decisao
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/geovana-oliveira-aragon/trips/${viagemId}/candidates/${candidatoId}/decide`,
    body, header)
    .then(() => {
        decisao ? alert("Candidato aceito na viagem!😍")
        : alert("Candidatura reprovada!")
        buscarViagemDetalhada()
    })
    .catch((err) => {
        alert("Erro! Tente novamente!😪")
    })
}