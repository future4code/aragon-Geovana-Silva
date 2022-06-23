import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../routes/coordinator"
import logo from "../img/labeddit.png"
import styled from "styled-components"

const CardHeader = styled.header`
background: rgb(68,0,0);
background: linear-gradient(90deg, rgba(68,0,0,1) 6%, rgba(121,9,9,1) 100%);
img{
    width: 250px;
    padding-top: 20px;
    padding-bottom: 15px;
} h2{
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 32%;
    margin-right: 32%;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 15px;
    color: rgba(121,9,9,1);
    font-size: 18px;
} button{
    margin: 1%;
    border-radius: 10px;
    border: none;
    padding: 1%;
    padding-top: 2px;
    padding-bottom: 4px;
    background-color: #5EFCE8;
    color: rgba(68,0,0,1);
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