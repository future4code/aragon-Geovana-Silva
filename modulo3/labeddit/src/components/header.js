import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../routes/coordinator"
import logo from "../img/labeddit.png"
import styled from "styled-components"

const CardHeader = styled.header`
background-image: linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );
img{
    width: 250px;
    padding-top: 20px;
    padding-bottom: 15px;
} h2{
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 37%;
    margin-right: 37%;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 15px;
    color: white;
    font-size: 18px;
} button{
    margin: 1%;
    border-radius: 10px;
    border: none;
    padding: 1%;
    padding-top: 2px;
    padding-bottom: 4px;
    background-color: #F2884B;
    color: white;
    font-size: 10px;
    font-weight: bold;
} button: hover{
    background-image: linear-gradient( 109.6deg,  rgba(231,76,60,1) 11.2%, rgba(203,67,53,1) 91.1% );
}
`

export default function Header(props) {
    const navigate = useNavigate()

    const Sair = () => {
        if (window.confirm("Deseja mesmo que quer sair?")){
            localStorage.removeItem("token")
            localStorage.removeItem("userEmail")
            irParaLogin(navigate)
            alert("Logout realizado!")
        }
    }
    
    return(
        <CardHeader>
        <header>
            <img src={logo} alt="Logo LabEddit" width="100px"/>
            {props.isProtected && (
            <menu>
                <h2> Seja bem-vindo(a), {localStorage.getItem("userEmail")}! </h2>
                <button onClick={Sair}> Sair </button>
            </menu>
            )}
        </header>
        </CardHeader>
    )
}

//Depois de criar as funções para Login/Proteção, o botão Navegar não funciona :(
    // <button onClick={() => irParaFeed(navigate)}> Navegar </button>