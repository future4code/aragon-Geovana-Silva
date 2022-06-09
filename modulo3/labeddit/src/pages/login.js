import { useNavigate } from "react-router-dom"
import Header from "../components/header"
import { irParaSignUp } from "../routes/coordinator"
import useForm from "../hooks/useForm"
import { requisicaoLogin } from "../services/requisicoes"
import useDesproteger from "../hooks/useDesproteger"

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
                        <button type={"submit"}> Entrar </button>
                    </form>
                </section>
                <hr/>
                <section>
                    <h3> Não tem cadastro? Crie uma conta agora!</h3>
                    <button onClick={() => irParaSignUp(navigate)}> Cadastrar </button>
                </section>
            </main>
        </>
    )
}