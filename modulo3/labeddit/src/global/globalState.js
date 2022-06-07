import axios from "axios"
import { useState } from "react"
import { URL } from "../constants/links"
import GlobalStateContext from "./globalStateContext"

const GlobalState = (props) => {
    const [posts, setPosts] = useState([])

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

    const states = {posts}
    const composicao = {setPosts}
    const buscas = {buscarPosts}

    const context = {states, composicao, buscas}
    return(
        <GlobalStateContext.Provider value={context}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState