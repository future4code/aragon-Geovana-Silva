import Header from "../Components/Header";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { irParaAdm } from '../Routes/Coordinator';
import useRequesicao from "../Hooks/useRequisicao";
import CardViagem from "../Components/CardViagem";
import styled from "styled-components";
import useForms from "../Hooks/useForms";
import { enviarCandidatura } from "../Services/Requests";

const Main = styled.div`
    text-align: center;
`

export default function Home() {
    const navigate = useNavigate()
    const [viagemData] = useRequesicao("trips", {})
    const [viagemId, setViagemId] = useState("")

useEffect(() => {
    if (localStorage.getItem("token")){
        irParaAdm(navigate)
    }
}, [])

const {form, onChange, limpar} = useForms({
    name:"",
    age:"",
    applicationText:"",
    profession:"",
    country:""
})

//onChangeViagem = (e) => {
    //setViagemId(e.target.value)
//} NÃO CONSIGO IDENTIFICAR O ERRO QUE ESTÁ DANDO AQUI(UNDEFINED)

const onClickEnviar = (e) => {
    e.preventDefault()
    enviarCandidatura(form, viagemId, limpar)
}

const opcoesViagens = viagemData.trips && viagemData.trips.map((trip) => {
    return <option
                key={trip.id}
                value={trip.id}
            > {trip.name} </option>
})

const paises = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
    "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
    "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde",
    "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica",
    "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland",
    "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam",
    "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras",
    "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan",
    "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau",
    "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands",
    "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar",
    "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa",
    "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea",
    "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent",
    "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga",
    "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay",
    "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia",
    "Zimbabwe"]

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
                    <form onSubmit={onClickEnviar}>
                        <label htmlFor="trip"> Viagem: </label>
                        <select 
                            id={"trip"}
                            defaultValue={""}
                            //onChange={onChangeViagem}
                            //NÃO CONSIGO IDENTIFICAR O ERRO QUE ESTÁ DANDO AQUI(UNDEFINED)
                            required
                        >
                            <option 
                                value={""} 
                                disabled
                            > Escolha uma Viagem... </option>
                            {opcoesViagens}
                        </select>
                        <label htmlFor={"name"}> Nome: </label>
                        <input
                            id={"name"}
                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            pattern={"^.{3,}$"}
                            title={"O nome deve ter no mínimo 3 caracteres"}
                            required
                        />
                        <label htmlFor={"age"}> Idade: </label>
                        <input
                            id={"age"}
                            name={"age"}
                            type={"number"}
                            value={form.age}
                            onChange={onChange}
                            min={18}
                            required
                        />
                        <label htmlFor={"application-text"}> Texto de Candidatura: </label>
                        <input
                            id={"application-text"}
                            name={"applicationText"}
                            value={form.applicationText}
                            onChange={onChange}
                            pattern={"^.{30,}$"}
                            title={"O texto deve ter no mínimo 30 caracteres"}
                            required
                        />
                        <br />
                        <label htmlFor={"profession"}> Profissão: </label>
                        <input
                            id={"profession"}
                            name={"profession"}
                            value={form.profession}
                            onChange={onChange}
                            pattern={"^.{3,}$"}
                            title={"A profissão deve ter no mínimo 3 caracteres"}
                            required
                        />
                        <label htmlFor={"country"}> País de origem: </label>
                        <select
                            id={"country"}
                            name={"country"}
                            value={form.country}
                            onChange={onChange}
                            required
                        >
                            <option 
                                value={""} 
                                disabled
                            > Escolha um País... </option>
                            {paises.map((country) => {
                                return <option 
                                            value={country} 
                                            key={country}
                                        > {country} </option>
                            })}
                        </select>
                        <button type={"submit"}> Enviar Candidatura </button>
                    </form>
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