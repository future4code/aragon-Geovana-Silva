import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { refactorDate } from "../components/refactorDate"
import GlobalStateContext from "../global/globalStateContext"
import { irParaDetalhes } from "../routes/coordinator"
import styled from "styled-components"

const Card = styled.div`
display: grid;

`

export default function Cards(props) {
    const navigate = useNavigate()
    const {composicao} = useContext(GlobalStateContext)
    const {setPost} = composicao

    const irParaComentario = (id) => {
        setPost(props.post)
        irParaDetalhes(navigate, id)
    }

    const posts = props.posts && props.posts.map((post) => {
        return(
            <Card>
            <div key={post.id}>
                <h3> {post.title} </h3>
                <span><b> Autor: </b> {post.userId} </span>
                <p> Criado em {refactorDate(post.createdAt)} </p>
                <img src={`https://picsum.photos/200/300?${post.id}`} alt="Aleatória"/>
                <p><b> Descrição: </b> {post.body} </p>
                <p> Votos: {post.voteSum ? post.voteSum : 0} </p>
                <br/>
                <button> Like </button>
                <br/>
                <button> Dislike </button>
                <p> Comentários: {post.commentCount ? post.commentCount : 0} </p>
                {/* {props.isFeed && */}
                <button onClick={() => irParaComentario(post.id)}> Ver comentários </button>
                <hr/>
            </div>
            </Card>
        )
    })

    return(
        <article>
            {posts}
        </article>
    )
}