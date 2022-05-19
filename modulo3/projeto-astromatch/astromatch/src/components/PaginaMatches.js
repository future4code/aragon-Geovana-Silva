import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

const Matches = styled.div`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    h3 {
        font-size: 30px;
    }
`

const Lista = styled.div`
    display: flex;
    justify-content: space-evenly;
    img {
        background-color: #aaa;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        overflow: hidden;
        position: relative;
        bottom: 0;
    } span {    
        margin-left: 5px;
    }
`

export default function PaginaMatches() {
const [matches, setMatches] = useState(undefined)
    
useEffect(() => {
    getMatches();
}, []);

const getMatches = () => {
    axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/geovana-oliveira-aragon/matches")
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
}

const tudoMatches = matches && matches.map((match) => {
    return(
        <Lista>
        <figure key={match.id}>
            <img src={match.photo} alt={`foto de ${match.name}`} height="32"></img>
            <span>{match.name}</span>
            <hr />
        </figure>
        </Lista>
    )
})

    return (
        <Matches>
        <div>
            <h3> Matches </h3>
            {tudoMatches}
        </div>
        </Matches>
    );  
};