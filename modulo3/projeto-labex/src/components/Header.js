import { useNavigate } from "react-router-dom";
import { irParaHome } from "../Routes/Coordinator";
import { useState } from "react";
import { requesicaoLogin } from '../Services/Requests';
import styled from "styled-components";

const Inputs = styled.div`
    text-align: center;
`
export default function Header() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const login = (e) => {
    e.preventDefault()
    requesicaoLogin(email, password, navigate);
}

const logout = () => {
    localStorage.removeItem("token")
    irParaHome(navigate)
}

const handleInputValues = (e) => {
    switch(e.target.name){
        case "email":
            return setEmail(e.target.value);
        case "password":
            return setPassword(e.target.value);
        default:
            return;
    }
}

const renderizarHeader = localStorage.getItem("token")?
    (
        <button onClick={logout}> Logout </button>
    ) : (
        <form onSubmit={login}>
            <label htmlFor={"email"}> Email: </label>
            <input 
                id={"email"} 
                name={"email"} 
                value={email}
                onChange={handleInputValues}>
            </input>
            <br/>
            <label htmlFor={"password"}> Senha: </label>
            <input
                id={"password"}
                type={"password"}
                name={"password"}
                value={password}
                onChange={handleInputValues}>
            </input>
            <br/>
            <button type={"submit"}> Entrar </button>
        </form>
    )

return(
    <header>
        <Inputs>
        <h1> LABE<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/2560px-SpaceX-Logo-Xonly.svg.png" width="91" alt="LogoMarca"></img> </h1>
        {renderizarHeader}
        </Inputs>
    </header>
)
}