import Header from '../Components/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useForms from '../Hooks/useForms';
import { irParaHome } from '../Routes/Coordinator';
import useRequesicao from '../Hooks/useRequisicao';
import { deletarViagem, criarViagem } from '../Services/Requests';
import CardViagem from '../Components/CardViagem';
import styled from "styled-components";
import dataAtual from '../Util/DataAtual';

const Main = styled.div`
    text-align: center;
`

export default function Adm() {
    const navigate = useNavigate()

const [viagemData, buscarViagemData] = useRequesicao("trips", {})
const {form, onChange, limpar} = useForms({
        name: "", 
        planet:"", 
        date:"", 
        description:"",
        durationInDays: ""
    })

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

const onClickCriar = (e) => {
    e.preventDefault();
    criarViagem(form, limpar, buscarViagemData)
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

const planetas = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Plutão"
]

    return( 
        <div>
            <Header/>
            <hr/>
            <Main>
            <main>
                <section>
                    <h3> Crie uma nova viagem🛬</h3>
                    <form onSubmit={onClickCriar}>
                        <label htmlFor={"name"}> Nome: </label>
                        <input
                            id={"name"}
                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            pattern={"^.{5,}$"}
                            title={"O nome da viagem deve ter no mínimo 5 caracteres."}
                            required
                        />
                        <label htmlFor={"planet"}> Planeta: </label>
                        <select
                            id={"planet"}
                            name={"planet"}
                            defaultValue={""}
                            onChange={onChange}
                            required
                        >
                        <option value={""} disabled> Escolha um planeta!... </option>
                            {planetas.map((planet) => {
                                return <option 
                                    value={planet}
                                    key={planet}
                                    > 
                                    {planet} 
                                    </option>
                            })}
                        </select>
                        <label htmlFor={"date"}> Data de lançamento: </label>
                        <input 
                            id={"date"}
                            type={"date"}
                            name={"date"}
                            value={form.date}
                            onChange={onChange}
                            min={dataAtual()}
                            required
                        />
                        <label htmlFor={"description"}> Descrição: </label>
                        <input
                            id={"description"}
                            name={"description"}
                            value={form.description}
                            onChange={onChange}
                            pattern={"^.{20,}$"}
                            title={"O nome deve ter no mínimo 20 caracteres"}
                            required 
                        />
                        <label htmlFor={"duration"}> Duração &#40;em dias&#41;: </label>
                        <input
                            id={"duration"}
                            type={"number"}
                            name={"durationInDays"}
                            value={form.durationInDays}
                            onChange={onChange}
                            min={30}
                            required
                        />
                        <button type={"submit"}> Criar </button>
                    </form>
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