import axios from "axios"
import { URL } from "../constants/links"
import { irParaFeed } from "../routes/coordinator"

export const requisicaoLogin = (form, navigate, limpar) => {
    const body = {
        email: form.email,
        password: form.password
    }
    axios.post(`${URL}/users/login`
    , body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("Login realizado!")
        irParaFeed(navigate)
    })
    .catch((err) => {
        alert("Email e/ou senha inválidos! Tente novamente!")
        limpar()
    })
}

export const requisicaoSignUp =  (form, navigate, limpar) => {
    const body = {
        username: form.name,
        email: form.email,
        password: form.password
    }
    axios.post(`${URL}/users/signup`
    , body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("Usuário cadastrado com sucesso!")
        irParaFeed(navigate)
    })
    .catch((err) => {
        alert("Erro! Tente novamente!")
        limpar()
    })
}

export const requisicaoPost = (form, buscarPosts, limpar) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    const body = {
        title: form.title,
        body: form.body
    }
    axios.post(`${URL}/posts?page=1&size=10`,
    body, header)
    .then((res) => {
        alert(res.data)
        buscarPosts()
        limpar()
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}