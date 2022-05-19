import styled from "styled-components";

const Cabecalho = styled.div`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 45px;
    h1{
        background-image: linear-gradient(to bottom, #AB2800, #DE3400, #F7714A);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: black;
        font-size: 4rem;
        font-weight: bold;
        line-height: 1.1;
        margin-bottom: 35px;
        text-shadow: 1px 2px #333
    } img {
        margin-right: 5px;
        margin-left: 2px;
    } button {
        background-image: linear-gradient( 109.6deg,  rgba(231,76,60,1) 11.2%, rgba(203,67,53,1) 91.1% );
        font-size: 15px;
        font-family: Verdana;
        width: 120px;
        height: 49px;
        border-width: 0px;
        color: rgba(255, 255, 255, 1);
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
    } button:hover {
        background-image: linear-gradient( 109.6deg,  rgba(203,67,53,1) 11.2%, rgba(231,76,60,1) 91.1% );
    }
`

export default function Header(props) {
    return(
        <Cabecalho>
        <header>
            <h1>
                Astr<img src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg" alt="Logo" height="40px"></img>Match
            </h1>
            {props.pagina === "Perfil" ? 
                <button onClick={props.irParaPaginaMatches}> Matches </button> 
                : <button onClick={props.irParaPaginaPerfil}> Perfis </button>
            }   
        </header>
        </Cabecalho>
    );
};