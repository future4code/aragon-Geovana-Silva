import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cards from "../components/cards";
import Header from "../components/header";
import GlobalStateContext from "../global/globalStateContext";
import useForm from "../hooks/useForm";
import useProteger from "../hooks/useProteger";
import { irParaFeed } from "../routes/coordinator";
import { requisicaoComentario } from "../services/requisicoes";
import refactorDate from "../components/refactorDate"

export default function Detalhes() {
    useProteger()
    const navigate = useNavigate()
    const params = useParams()
    const {form, onChange, limpar} = useForm({
        body:""
    })
    const context = useContext(GlobalStateContext)
    const {post, comentario, carregando} = context.states
    const {buscarComentarios} = context.buscas

    const criar = (e) => {
        e.preventDefault()
        requisicaoComentario(form, buscarComentarios, post.Id, limpar)
    }

    useEffect(() => {
        if(post.id && post.id === params.postId){
            buscarComentarios(post.id)
        } else {
            alert("Erro! Você será redirecionado para o feed.")
            irParaFeed(navigate)
        }
    }, [])

    

    const mostrar = comentario.length ? comentario.map((comment) => {
        return(
            <div key={comment.id}>
                <span><b> Autor: </b> {comment.username} </span>
                <p> "{comment.body}" </p>
                <p> Criado em {refactorDate(comment.createdAt)} </p>
                <p> Votos: {comment.voteSum ? comment.voteSum : 0} </p>
                <button> Dislike </button>
                <br/>
                <button> Like </button>
                <br/>
            </div>
        )
    }) : <p> Não há comentários, seja você o(a) primeiro(a) a comentar! </p>

    return(
        <main>
            <Header isProtected={true}/>
            <hr/>
            <section>
                <h2> Informações do post </h2>
                <Cards
                    post={post}
                    feed={false}
                />
            </section>
            <section>
                <h2> Escreva o seu comentário </h2>
                <form onSubmit={criar}>
                    <label htmlFor={"body"}> Comentário: </label>
                    <input
                        id={"body"}
                        type={"text"}
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"Mínimo 5 caracteres."}
                        required
                    />
                    <br/>
                    <button type={"submit"}> Criar </button>
                    <br/>
                    <button onClick={() => navigate(-1)}> Voltar </button>
                </form>
            </section>
            <hr/>
            <section>
                <h2> Lista de comentários </h2>
                {carregando ? <p> Carregando... </p> : mostrar}
            </section>
        </main>
    )
}