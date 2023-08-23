import React from "react";
import { v4 as uuid } from "uuid";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from "./hooks/useAxios"; 
import "./PokeDex.css";

function PokeDex() {
  const [pokemonData, fetchPokemonData] = useAxios(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const addPokemon = async (name) => {
    fetchPokemonData(`https://pokeapi.co/api/v2/pokemon/${name}`);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemonData.map((cardData) => (
          <PokemonCard
            key={uuid()} 
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
