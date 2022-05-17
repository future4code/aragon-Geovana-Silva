import axios from "axios";
import { useState, useEffect } from "react";

export default function PokeCard(props) {
const [pokemon, setPokemon] = useState({})

useEffect(() => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
    .then((res) => {
      console.log(res)
      setPokemon(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [props.pokeName]);

return (
    <figure>
      <strong> {pokemon.name && pokemon.name.toUpperCase()} </strong>
      <p> Peso: {pokemon.weight} Kg </p>
      <p> Tipo: {pokemon.types && pokemon.types[0].type.name} </p>
        {pokemon.sprites && (
      <img src={pokemon.sprites.front_default} alt={pokemon.name} width="150"/>
)}
    </figure>
);
};