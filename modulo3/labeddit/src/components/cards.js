import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../global/globalStateContext"
import { irParaDetalhes } from "../routes/coordinator"
import refactorDate from "./refactorDate"
import styled from "styled-components"

export default function Cards(props) {
    const navigate = useNavigate()
    const {composicao} = useContext(GlobalStateContext)
    const {setPost} = composicao

    const irParaComentario = () => {
        setPost(props.post)
        irParaDetalhes(navigate, id)
    }

    const {
        id, 
        username, 
        title, 
        body, 
        createdAt, 
        voteSum, 
        commentCount, 
    } = props.post

    return(
        <article>
            <div key={id}>
                <h3> {username} </h3>
                <h4> {title} </h4>
                <p> Criado em: {refactorDate(createdAt)} </p>
                <img src={`https://picsum.photos/200/300?${id}`} alt="Aleatória"/>
                <p><b> Descrição: </b> {body} </p>
                <p> Votos: {voteSum ? voteSum :0} </p>
                <br/>
                <button><img src="https://imagepng.org/wp-content/uploads/2017/10/facebook-amei-emoji.png" alt="Gostei" width="50px"/></button>
                <br/>
                <button><img src="https://cdn2.iconfinder.com/data/icons/hearts-16/100/004-512.png" alt="Não gostei" width="50px"/></button>
                <p> Comentários: {commentCount ? commentCount : 0} </p>
                {props.feed &&
                <button onClick={() => irParaComentario()}>Ver comentário </button>}
                <hr/>
            </div>
        </article>
    )
}

//Criar lógica de votos
//Criar a função de criar comentário