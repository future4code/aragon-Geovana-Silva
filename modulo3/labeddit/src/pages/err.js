import { useNavigate } from "react-router-dom"
import { irParaFeed } from "../routes/coordinator"
import Erro from "../img/erro.png"
export default function Err() {
    const navigate = useNavigate()

    return(
        <>
            <img src={Erro} alt="Erro astronauta"/>
            <h1> Página não encontrada! </h1>
            <h3> Mas, não se preocupe! Clique no botão abaixo para voltar a página. </h3>
            <button onClick={() => irParaFeed(navigate)}> Ir para página principal </button>
        </>
    )
}