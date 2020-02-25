import React from "react";
import PokeItem from "../PokeItem";
import styled from "styled-components";

export const PokeGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  grid-gap: 24px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`;
function PokemonDashboard({ allPokemon, error }) {
  return (
    <>
      <section>Pokemon Dashboard</section>
      <PokeGrid>
        {allPokemon.map(pokemon => {
          const { name, sprites } = pokemon.data;
          return <PokeItem name={name} sprites={sprites} type="ADD" />;
        })}
      </PokeGrid>
      {error && <p>Error fetching pokemon</p>}
    </>
  );
}

export default PokemonDashboard;
