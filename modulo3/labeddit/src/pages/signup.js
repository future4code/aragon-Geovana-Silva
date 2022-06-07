import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import useDesproteger from "../hooks/useDesproteger";
import useForm from "../hooks/useForm";
import { irParaLogin } from "../routes/coordinator";
import { requisicaoSignUp } from "../services/requisicoes";

export default function SignUp() {
    useDesproteger()
    const navigate = useNavigate()

    const {form, onChange, limpar} = useForm({
        name:"",
        email:"",
        password:""
    })

    const cadastrar = (e) => {
        e.preventDefault()
        requisicaoSignUp(form, navigate, limpar)
    }

    return(
        <main>
            <Header isProtected={false}/>
            <hr/>
            <section>
            <form onSubmit={cadastrar}>
                <label htmlFor={"name"}> Nome: </label>
                <input
                    id={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <br/>
                <label htmlFor={"email"}> Email: </label>
                <input
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <br/>
                <label htmlFor={"password"}> Senha: </label>
                <input
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={"A senha deve ter no mínimo 8 caracteres e máximo 30 caracteres."}
                    required
                />
                <br/>
                <button type={"submit"}> Cadastrar </button>
            </form>
            <button onClick={() => irParaLogin(navigate)}> Voltar</button>
            </section>
        </main>
    )
}