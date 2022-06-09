import axios from "axios"
import { useState } from "react"
import { URL } from "../constants/links"
import GlobalStateContext from "./globalStateContext"

const GlobalState = (props) => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [comentario, setComentario] = useState([])

    const buscarPosts = () => {
        const header = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        axios.get(`${URL}/posts?page=1&size=10`
        , header)
        .then((res) => {
            setPosts(res.data)
        })
        .catch((err) => {
            alert("Erro! :(")
        })
    }

    const buscarComentarios = (postId) => {
        const header = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        axios.get(`${URL}/posts/${postId}/comments`,
        header)
        .then((res) => {
            setComentario(res.data)
        })
        .catch((err) => {
            alert("Erro! :(")
        })
    }

    const states = {posts, post, comentario}
    const composicao = {setPosts, setPost, setComentario}
    const buscas = {buscarPosts, buscarComentarios}
    const context = {states, composicao, buscas}
    
    return(
        <GlobalStateContext.Provider value={context}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState