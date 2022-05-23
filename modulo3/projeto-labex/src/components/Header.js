import { useNavigate } from "react-router-dom";
import { irParaHome, irParaAdm } from "../Routes/Coordinator";

export default function Header(props) {
    const navigate = useNavigate()

const renderizarHeader = () => {
    switch (props.paginaAtual) {
        case "home-page":
            return(
                <button onClick={() => irParaAdm(navigate)}> Entrar </button>
            );
        case "adm-page":
            return(
                <button onClick={() => irParaHome(navigate)}> Logout </button>
            );
        default:
            return;
    }
}

return(
    <header>
        <h1> LabeX </h1>
        {renderizarHeader()}
    </header>
)
}