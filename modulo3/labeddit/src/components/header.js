import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../routes/coordinator"
import logo from "../img/labeddit.png"

export default function Header(props) {
    const navigate = useNavigate()

    const logout = () => {
        if (window.confirm("Deseja mesmo que quer sair?")){
            localStorage.removeItem("token")
            localStorage.removeItem("userEmail")
            irParaLogin(navigate)
            alert("Logout realizado!")
        }
    }
    
    return(
        <header>
            <img src={logo} alt="Logo LabEddit" width="100px"/>
            <hr/>
            {props.isProtected && (
            <menu>
                <h2> Seja bem-vindo(a), {localStorage.getItem("userEmail")}! </h2>
                <button onClick={logout}> Logout </button>
            </menu>
            )}
        </header>
    )
}

//Depois de criar as funções para Login/Proteção, o botão Navegar não funciona :(
    // <button onClick={() => irParaFeed(navigate)}> Navegar </button>