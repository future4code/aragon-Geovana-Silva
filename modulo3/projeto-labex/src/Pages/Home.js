import Header from "../Components/Header";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { irParaAdm } from '../Routes/Coordinator';
import styled from "styled-components";

const Main = styled.div`
    text-align: center;
`

export default function Home() {
    const navigate = useNavigate()

useEffect(() => {
    if (localStorage.getItem("token")){
        irParaAdm(navigate)
    }
}, [])

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
                </section>
            </main>
            </Main>
        </div>
    )
}