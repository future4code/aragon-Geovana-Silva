import { useNavigate } from "react-router-dom";
import { irParaDetalhes } from "../Routes/Coordinator";

export default function CardViagem(props) {
    const navigate = useNavigate()
    const {
        id,
        name,
        description,
        planet,
        durationInDays,
        date
    } = props.trip;

const token = localStorage.getItem("token")

return(
    <div>
        <p><b> 👤 Nome: </b> {name} </p>
        <p><b> 🧾 Descrição: </b> {description} </p>
        <p><b> 🪐 Planeta: </b> {planet} </p>
        <p><b> ⏰ Duração: </b> {durationInDays} </p>
        <p><b> 📆 Data: </b> {date} </p>
        {token && (
            <div>
                <button onClick={() => irParaDetalhes(navigate, id)}> Detalhes </button>
                <button onClick={() => props.removerViagem(id)}> Deletar viagem </button>
            </div>
        )}
        <hr/>
    </div>
)
}