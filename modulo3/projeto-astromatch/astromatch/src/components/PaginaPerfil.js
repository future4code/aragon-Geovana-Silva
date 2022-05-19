import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

const CardPerfil = styled.div`
    text-align: center;
    p {
        color: white;
    }
`
const Imagem = styled.div`
    img {
        border-radius: 10px;
        box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
        margin-bottom: 20px;
        
    } 
`

const BotaoLike = styled.div`
    img {
        width: 30px;
    } button {
        box-shadow:inset 0px 0px 0px -46px #ffffff;
        background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
        background-color:#f9f9f9;
        border-radius: 50px;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        padding: 30px;
        border: none;
    } button:hover {
        background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	    background-color:#e9e9e9;
    } button:active {
        position:relative;
	    top:1px;
    }
`
const BotaoDislike = styled.div`
    img {
        width: 30px;
    } button {
        box-shadow:inset 0px 0px 0px -46px #ffffff;
        background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
        background-color:#f9f9f9;
        border-radius: 50px;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        padding: 30px;
        border: none;
    } button:hover {
        background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
        background-color:#e9e9e9;
    } button:active {
        position:relative;
        top:1px;
    }
`

const Botoes = styled.div`
    display: flex;
    margin-left: 32%;
    margin-right: 40%;
    margin-top: 35px;
    button {
        margin: 10px;
    }
`

const SubCardPerfil = styled.div`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 400px;
    margin-right: 400px;
    margin-bottom: 100px;
    border-radius: 25px;
    padding-bottom: 40px;
    padding-top: 15px;
    background-image: linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );
`

const BotaoResetar = styled.div`
    button {
        background-image: linear-gradient( 109.6deg,  rgba(231,76,60,1) 11.2%, rgba(203,67,53,1) 91.1% );
        font-size: 15px;
        font-family: Verdana;
        width: 120px;
        height: 49px;
        border-width: 0px;
        color: rgba(255, 255, 255, 1);
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
        margin-top: 20px;
} button:hover {
    background-image: linear-gradient( 109.6deg,  rgba(203,67,53,1) 11.2%, rgba(231,76,60,1) 91.1% );
}
`

export default function PaginaPerfil() {
const [profile, setProfile] = useState(undefined)
//Fiquei na dúvida do porque eu não conseguir renderizar com
//o state escrito "Perfil" ao invés de "Profile" de acordo com
//a API.

useEffect(() => {
    getPerfil();
}, []);

const getPerfil = () => {
    axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/geovana-oliveira-aragon/person")
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
}

const escolherPerfil = (idPerfil, escolha) => {
    const body = {
        id: idPerfil,
        choice: escolha
    }
    axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/geovana-oliveira-aragon/choose-person", body)
        .then((res) => {
            getPerfil()
        })
        .catch((err) => {
            console.log(err)
        })
}

const resetarPerfil = () => {
    axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/geovana-oliveira-aragon/clear")
        .then((res) => {
            alert("Resetado com sucesso!")
            getPerfil()
        })
        .catch((err) => {
            console.log(err)
        })
}

const cardPerfil = profile && (
    <CardPerfil>
    <figure>
        <Imagem>
        <img src={profile.photo} alt={profile["photo_alt"]} height={"240px"}></img>
        </Imagem>
        <p><b> {profile.name}, {profile.age} </b></p>
        <p> {profile.bio} </p>
        <Botoes>
        <BotaoLike>
        <button onClick={() => {escolherPerfil(profile.id, true)}}><img src="https://www.picng.com/upload/heart/png_heart_31626.png" alt="like"></img> </button>
        </BotaoLike>
        <BotaoDislike>
        <button onClick={() => {escolherPerfil(profile.id, false)}}><img src="https://atende.sptrans.com.br/imagens/IconesUteis/Wrong.png" alt="dislike"></img></button>
        </BotaoDislike>
        </Botoes>
    </figure>
    </CardPerfil>
)

    return (
        <SubCardPerfil>
        <div>
            {cardPerfil}
            <BotaoResetar>
            <button onClick={() => {resetarPerfil()}}> Resetar </button>
            </BotaoResetar>
        </div>
        </SubCardPerfil>
    ) //Após eu inserir esse botão acima, minha página começou agir estranhamente.
}