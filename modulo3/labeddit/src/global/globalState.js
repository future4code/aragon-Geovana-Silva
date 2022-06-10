import axios from "axios"
import { useState } from "react"
import { URL } from "../constants/links"
import GlobalStateContext from "./globalStateContext"

const GlobalState = (props) => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [comentario, setComentario] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [pagina, setPagina] = useState(1)
    const [downVote, setDownVote] = useState(false)
    const [upVote, setUpVote] = useState(true)

    const size = 10

    const buscarPosts = (currentPage) => {
        setCarregando(true)
        const header = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        axios.get(`${URL}/posts?page=${currentPage}&size=${size}`
        , header)
        .then((res) => {
            setPosts(res.data)
            setCarregando(false)
        })
        .catch((err) => {
            alert("Erro! :(")
        })
    }

    const buscarComentarios = (postId) => {
        setCarregando(true)
        const header = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        axios.get(`${URL}/posts/${postId}/comments`,
        header)
        .then((res) => {
            setComentario(res.data)
            setCarregando(false)
        })
        .catch((err) => {
            alert("Erro! :(")
        })
    }

    const states = {posts, post, comentario, carregando, pagina, downVote, upVote}
    const composicao = {setPosts, setPost, setComentario, setCarregando, setPagina, setUpVote, setDownVote}
    const buscas = {buscarPosts, buscarComentarios}
    const context = {states, composicao, buscas}
    
    return(
        <GlobalStateContext.Provider value={context}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState