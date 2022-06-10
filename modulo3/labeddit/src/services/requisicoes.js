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
    axios.post(`${URL}/posts`,
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

export const requisicaoComentario = (form, buscarComentarios, postId, limpar) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    const body = {
        body: form.body
    }
    axios.post(`${URL}/posts/${postId}/comments`, 
    header, body)
    .then((res) => {
        buscarComentarios(postId)
        limpar()
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}

export const requsicaoPostVoto = (postId, direction, buscarPosts) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    const body = {
        direction: direction
    }
    axios.post(`${URL}/posts/${postId}/votes`,
    body, header)
    .then((res) => {
        alert("Você votou!")
        buscarPosts()
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}

export const requisicaoComentarioVoto = (comentarioId, direction, buscarComentarios, postId) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    const body = {
        direction: direction
    }
    axios.post(`${URL}/comments/${comentarioId}/votes`,
    body, header)
    .then((res) => {
        alert("Você votou!")
        buscarComentarios(postId)
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}

export const requisicaoEscolherVotoPost = (buscarPosts, direction, postId) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    const body = {
        direction: direction
    }
    axios.put(`${URL}/posts/${postId}/votes`,
    header, body)
    .then((res) => {
        alert("Você mudou o voto!")
        buscarPosts()
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}

export const requisicaoEscolherVotoComentario = (postId, comentarioId, buscarComentarios, direction) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    const body = {
        direction: direction
    }
    axios.put(`${URL}/comments/${comentarioId}/votes`,
    header, body)
    .then((res) => {
        alert("Você mudou o voto!")
        buscarComentarios(postId)
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}

export const requisicaoDeletarVotoPost = (buscarPosts, postId) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    axios.delete(`${URL}/posts/${postId}/votes`, 
    header)
    .then((res) => {
        alert("Voto removido!")
        buscarPosts()
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}

export const requisicaoDeletarVotoComentario = (comentarioId, buscarComentarios, postId) => {
    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }
    axios.delete(`${URL}/comments/${comentarioId}/votes`,
    header)
    .then((res) => {
        alert("Voto removido!")
        buscarComentarios(postId)
    })
    .catch((err) => {
        alert("Erro! :(")
    })
}