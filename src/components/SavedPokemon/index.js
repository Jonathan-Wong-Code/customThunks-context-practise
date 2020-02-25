import React from "react";
import { usePokeStateContext } from "../../context/pokemon";
import { PokeGrid } from "../PokemonDashboard";
import PokeItem from "../PokeItem";

function SavedPokemon() {
  const { savedPokemon } = usePokeStateContext();

  return (
    <section>
      savedPokemon
      <PokeGrid>
        {savedPokemon.map(pokemon => {
          const { name, sprites, id } = pokemon;
          return (
            <PokeItem name={name} sprites={sprites} id={id} type="REMOVE" />
          );
        })}
      </PokeGrid>
    </section>
  );
}

export default SavedPokemon;
