import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../global/globalStateContext"
import { irParaDetalhes } from "../routes/coordinator"
import refactorDate from "./refactorDate"

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
        userVote
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
                <button> Like </button>
                <br/>
                <button> Dislike </button>
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