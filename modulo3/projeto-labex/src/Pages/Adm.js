import Header from '../Components/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { irParaHome } from '../Routes/Coordinator';
import useRequesicao from '../Hooks/useRequisicao';
import { deletarViagem } from '../Services/Requests';
import CardViagem from '../Components/CardViagem';
import styled from "styled-components";

const Main = styled.div`
    text-align: center;
`

export default function Adm() {
    const navigate = useNavigate()

const [viagemData, buscarViagemData] = useRequesicao("trips", {})

useEffect(() => {
    if (!localStorage.getItem("token")) {
        irParaHome(navigate);
    }
}, [])

const removerViagem = (viagemId) => {
    if (window.confirm("Tem certeza que deseja remover?🤨")){
        deletarViagem(viagemId, buscarViagemData)
    }
}

const listaViagens = viagemData.trips ? viagemData.trips.map((trip) => {
    return(
        <CardViagem
            key={trip.id}
            trip={trip}
            removerViagem={removerViagem}
        />
    )
}) : (<p> Carregando... </p>)

    return( 
        <div>
            <Header/>
            <hr/>
            <Main>
            <main>
                <section>
                    <h3> Crie uma nova viagem🛬</h3>
                </section>
                <hr/>
                <section>
                    <h3> Lista de viagens💺 </h3>
                    {listaViagens}
                </section>
            </main>
            </Main>
        </div>
    )
}