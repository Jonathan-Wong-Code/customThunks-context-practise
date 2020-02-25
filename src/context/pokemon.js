import React, { useContext, createContext, useReducer } from "react";
import uuid from "uuid";

const PokemonStateContext = createContext();
const PokemonDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SAVED_POKEMON": {
      return {
        ...state,
        savedPokemon: [...state.savedPokemon, action.payload.newPokemon]
      };
    }

    case "REMOVE_SAVED_POKEMON": {
      return {
        ...state,
        savedPokemon: state.savedPokemon.filter(
          pokemon => pokemon.id !== action.payload.id
        )
      };
    }

    default:
      return state;
  }
};

const initialState = {
  savedPokemon: []
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PokemonStateContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonStateContext.Provider>
  );
};

export const usePokeStateContext = () => {
  const context = useContext(PokemonStateContext);
  if (!context) {
    throw new Error("Must use Context with Provder");
  }

  return context;
};

export const usePokeDispatchContext = () => {
  const dispatch = useContext(PokemonDispatchContext);
  if (!dispatch) {
    throw new Error("Must use Context with Provder");
  }

  const addPokemon = pokemon => {
    const newPokemon = { ...pokemon, id: uuid() };
    dispatch({ type: "ADD_SAVED_POKEMON", payload: { newPokemon } });
  };

  const removePokemon = id => {
    dispatch({ type: "REMOVE_SAVED_POKEMON", payload: { id } });
  };

  return { dispatch, addPokemon, removePokemon };
};
