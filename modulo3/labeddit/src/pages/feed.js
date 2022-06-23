import { useContext, useEffect } from "react"
import Cards from "../components/cards"
import Header from "../components/header"
import GlobalStateContext from "../global/globalStateContext"
import useForm from "../hooks/useForm"
import useProteger from "../hooks/useProteger"
import { requisicaoPost } from "../services/requisicoes"
import styled from "styled-components"

const Card = styled.div`
background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
margin: 0;
padding: 3%;    
section{
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% );
    border-radius: 50px;
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 3%;
}h2{
    color: rgba(68,0,0,1);
    font-size: 30px;
    padding: 2%;
    font-weight: bold;
    background-color: #5EFCE8;
    border-radius: 20px;
} label{
    color: rgba(68,0,0,1);
    font-weight: bold;
} input{
    border-radius: 50px;
    border: none;
    padding: 2px;
    margin: 4px;
    font-size: 25px;
} form{
    padding: 4%;
} button{
    border-radius: 50px;
    border: none;
    margin-top: 20px;
    font-size: 15px;
    padding: 1%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #5EFCE8;
    color: rgba(68,0,0,1);
    font-weight: bold;
} button: hover{
    background-color: rgba(68,0,0,1);
    color: white;
}
`
const Lista = styled.div`
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% );
border-radius: 50px;
margin-left: 30%;
margin-right: 30%;
margin-bottom: 3%;
nav{
    margin-bottom:3%;
    background-color:white;
    margin-right: 30%;
    margin-left: 30%;
    margin-top: 5%;
    padding-bottom: 1%;
    padding-top: 1%;
    border-radius: 10px;
} h2{
        color: rgba(68,0,0,1);
        font-size: 30px;
        padding: 2%;
        font-weight: bold;
        background-color: #5EFCE8;
        border-radius: 20px;
}
`

export default function Feed() {
    useProteger()
    const {form, onChange, limpar} = useForm({
        title:"",
        body: ""
    })
    const context = useContext(GlobalStateContext)
    const {posts, carregando, pagina} = context.states
    const {buscarPosts} = context.buscas
    const {setPagina} = context.composicao

    const criarPost = (e) => {
        e.preventDefault()
        requisicaoPost(form, buscarPosts, limpar)
    }
    
    useEffect(() => {
        buscarPosts(pagina)
    }, [])

    const mostrar = posts.length && posts.map((post) => {
        return(
            <Cards
                feed={true}
                post={post}
            />
        )
    })

    const escolherPagina = (soma) => {
        const proximaPagina = pagina + soma
        setPagina(proximaPagina)
        buscarPosts(proximaPagina)
    }

    return(
        <>
            <main>
                <Header isProtected={true}/>
                <Card>
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
                </Card>
                <section>
                    <Lista>
                    <div>
                    <h2> Lista de Posts </h2>
                        <nav>
                            {pagina !== 1  &&
                                <button onClick={() => escolherPagina(-1)}> Anterior </button>
                            }
                            <span> Página: {pagina} </span>
                            {posts.length &&
                                <button onClick={() => escolherPagina(1)}> Próximo </button>
                            }
                        </nav>
                        {carregando ? <p> Carregando... </p> : mostrar}
                    </div>
                    </Lista>
                </section>
            </main>
        </>
    )
}