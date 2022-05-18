export default function Header(props) {
    return(
        <header>
            <h1>
                <img src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg" alt="Logo" height="40px"></img>
                AstroMatch
            </h1>
            {props.pagina === "Perfil" ? 
                <button onClick={props.irParaPaginaMatches}> Ir para matches </button> 
                : <button onClick={props.irParaPaginaPerfil}> Ir para perfis </button>
            }   
        </header>
    );
};