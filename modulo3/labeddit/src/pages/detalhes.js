import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cards from "../components/cards";
import Header from "../components/header";
import GlobalStateContext from "../global/globalStateContext";
import useForm from "../hooks/useForm";
import useProteger from "../hooks/useProteger";
import { irParaFeed } from "../routes/coordinator";
import { requisicaoComentario } from "../services/requisicoes";

export default function Detalhes() {
    useProteger()
    const navigate = useNavigate()
    const params = useParams()
    const {form, onChange, limpar} = useForm({
        body:""
    })
    const context = useContext(GlobalStateContext)
    const {posts, post, comentario} = context.states
    const {buscarComentarios} = context.buscas
//Alerta acima
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
    })

    const mostrar = console.log("Aqui estará os comentários.")

    return(
        <main>
            <Header isProtected={true}/>
            <hr/>
            <button onClick={() => navigate(-1)}> Voltar </button>
            <section>
                <h2> Informações do post </h2>
                <Cards
                    posts={posts}
                    isFeed={false}
                />
                {/* //Alerta acima */}
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
                </form>
            </section>
            <hr/>
            <section>
                <h2> Lista de comentários </h2>
                {mostrar}
            </section>
        </main>
    )
}