import Header from '../Components/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { irParaHome } from '../Routes/Coordinator';
import styled from "styled-components";

const Main = styled.div`
    text-align: center;
`

export default function Adm() {
    const navigate = useNavigate()

useEffect(() => {
    if (!localStorage.getItem("token")) {
        irParaHome(navigate);
    }
}, [])

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
                </section>
            </main>
            </Main>
        </div>
    )
}