import { useState, useEffect } from 'react';
import axios from 'axios';

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

const cardPerfil = profile && (
    <figure>
        <img src={profile.photo} alt={profile["photo_alt"]} height={"240px"}></img>
        <p> {profile.name}, {profile.age} </p>
        <p> {profile.bio} </p>
        <button onClick={() => getPerfil()}> Próximo perfil </button>
    </figure>
)

    return (
        <div>
            <h2> Perfis </h2>
            {cardPerfil}
        </div>
    )
}