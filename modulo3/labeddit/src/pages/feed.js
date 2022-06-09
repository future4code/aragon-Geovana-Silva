import { useContext, useEffect } from "react"
import Cards from "../components/cards"
import Header from "../components/header"
import GlobalStateContext from "../global/globalStateContext"
import useForm from "../hooks/useForm"
import useProteger from "../hooks/useProteger"
import { requisicaoPost } from "../services/requisicoes"
import styled from "styled-components"

const Card = styled.div`
`

export default function Feed() {
    useProteger()
    const {form, onChange, limpar} = useForm({
        title:"",
        body: ""
    })
    const context = useContext(GlobalStateContext)
    const {posts} = context.states
    const {buscarPosts} = context.buscas

    const criarPost = (e) => {
        e.preventDefault()
        requisicaoPost(form, buscarPosts, limpar)
    }
    
    useEffect(() => {
        buscarPosts()
    }, [])

    const mostrar = posts.length && posts.map((post) => {
        return(
            <Cards
                feed={true}
                post={post}
            />
        )
    })

    return(
        <>
            <main>
                <Header isProtected={true}/>
                <hr/>
                <section>
                    <h2> Crie um novo Post </h2>
                    <form onSubmit={criarPost}>
                    <label htmlFor={"title"}> Título: </label>
                    <input
                        id={"title"}
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        pattern={"^{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres."}
                        required
                    />
                    <br/>
                    <label htmlFor={"body"}> Texto: </label>
                    <input
                        id={"body"}
                        type={"text"}
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        pattern={"^{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres."}
                        required
                    />
                    <br/>
                    <button type={"submit"}> Criar post </button>
                    </form>
                </section>
                <hr/>
                <section>
                    <h2> Lista de Posts </h2>
                    <Card>
                        {mostrar}
                    </Card>
                </section>
            </main>
        </>
    )
}