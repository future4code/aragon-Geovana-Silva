import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { irParaAdm, irParaHome } from "../Routes/Coordinator";
import useRequesicao from "../Hooks/useRequisicao";

export default function Detalhes () {
    const navigate = useNavigate()
    const params = useParams()
    const [detalheData] = useRequesicao(`trip/${params.viagemId}`, {})

useEffect(() => {
    if (!localStorage.getItem("token")){
        irParaHome(navigate)
    }
}, [])

const listaCandidatos = detalheData.trip && detalheData.trip.candidates.map((candidate) => {
    return(
        <div key={candidate.id}>
            <span><b> Nome: </b> {candidate.name} - </span>
            <span><b> Profissão: </b> {candidate.profession} - </span>
            <span><b> Idade: </b> {candidate.age} - </span>
            <span><b> País: </b> {candidate.country} - </span>
            <span><b> Texto de candidatura: </b> {candidate.applicationText} </span>
        <button> Aprovar </button>
        <button> Reprovar </button>
        </div>
    )
})

return(
    <div>
        <button onClick={() => irParaAdm(navigate)}> Sair de detalhes </button>
        <h2> Viagem: {detalheData.trip && detalheData.trip.name} </h2>
        <hr/>
        <h4> Lista de candidatos </h4>
        {listaCandidatos}
        <hr/>
        <h4> Lista de aprovados </h4>
    </div>
)
}