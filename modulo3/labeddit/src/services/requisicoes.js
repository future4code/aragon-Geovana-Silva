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