import { useNavigate } from "react-router-dom"
import Header from "../components/header"
import { irParaSignUp } from "../routes/coordinator"
import useForm from "../hooks/useForm"
import { requisicaoLogin } from "../services/requisicoes"
import useDesproteger from "../hooks/useDesproteger"
import styled from "styled-components"

const Main = styled.main`
background-color: #DE4313;
margin: 5%;
margin-left: 30%;
margin-right: 30%;
border-radius: 50px;
padding: 3%;
section{
    margin: 20px;
} h2{
    font-size: 60px;
    margin-bottom: 50px;
    color: rgba(68,0,0,1);
    border-radius: 20px;
    margin-left: 25%;
    margin-right: 25%;
    padding-bottom: 1%;
    padding-top: 1%;
} label{
    color:white;
    font-weight: bold;
}input{
    border-radius: 50px;
    border: none;
    padding: 2px;
    margin: 4px;
    font-size: 25px;
} button{
    border-radius: 50px;
    border: none;
    margin-top: 20px;
    font-size: 15px;
    padding: 1%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: rgba(68,0,0,1);
    color: white;
    font-weight: bold;
} button: hover{
    background-color: #DE4313;
    color: rgba(68,0,0,1);
} h3{
    color: white;
}
`

export default function Login() {
    useDesproteger()
    const navigate = useNavigate()
    
    const {form, onChange, limpar} = useForm({ 
        email: "",
        password: ""
    })

    const login = (e) => {
        e.preventDefault()
        requisicaoLogin(form, navigate, limpar)
    }

    return(
        <>
            <main>
                <Header isProtected={false}/>
                <hr/>
                <Main>
                <section>
                    <h2> Login </h2>
                    <form onSubmit={login}>
                        <label htmlFor={"email"}> Email: </label>
                        <input
                            onInvalid={"email"}
                            type={"email"}
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                        ></input>
                        <br/>
                        <label htmlFor={"password"}> Senha: </label>
                        <input
                            onInvalid={"password"}
                            type={"password"}
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                        ></input>
                        <br/>
                        <button type={"submit"}> Entrar </button>
                    </form>
                </section>
                <hr/>
                <section>
                    <h3> Não tem cadastro? Crie uma conta agora!</h3>
                    <button onClick={() => irParaSignUp(navigate)}> Cadastrar </button>
                </section>
                </Main>
            </main>
        </>
    )
}