import axios from "axios";

const apiURL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemon = async dispatch => {
  try {
    const pokePromises = [];

    for (let i = 1; i < 101; i++) {
      pokePromises.push(axios.get(`${apiURL}/${i}/`));
    }
    const allPokemon = await Promise.all(pokePromises);
    dispatch({ type: "RESPONSE_COMPLETED", payload: { allPokemon } });
  } catch (error) {
    dispatch({ type: "ERROR", payload: { error } });
  }
};
