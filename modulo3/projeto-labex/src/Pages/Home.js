import Header from "../Components/Header";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { irParaAdm } from '../Routes/Coordinator';
import useRequesicao from "../Hooks/useRequisicao";
import CardViagem from "../Components/CardViagem";
import styled from "styled-components";

const Main = styled.div`
    text-align: center;
`

export default function Home() {
    const navigate = useNavigate()
    const [viagemData] = useRequesicao("trips", {})

useEffect(() => {
    if (localStorage.getItem("token")){
        irParaAdm(navigate)
    }
}, [])

const listaViagens = viagemData.trips ? viagemData.trips.map((trip) => {
    return(
        <CardViagem
            key={trip.id}
            trip={trip}
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
                    <h3> Inscreva-se numa nova viagem!🧳 </h3>
                </section>
                <hr/>
                <section>
                    <h3> Lista de viagens🛫 </h3>
                    {listaViagens}
                </section>
            </main>
            </Main>
        </div>
    )
}