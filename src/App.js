import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useThunkReducer from "./hooks/useThunkReducer";

import SavedPokemon from "./components/SavedPokemon";
import PokemonDashboard from "./components/PokemonDashboard";
import Header from "./components/Header";
import { fetchAllPokemon } from "./apiCalls/pokemon";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "RESPONSE_COMPLETED": {
      return action.payload.allPokemon;
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  useEffect(() => {
    dispatch(fetchAllPokemon);
  }, [dispatch]);
  const { data: allPokemon, error } = state;
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <PokemonDashboard
                {...props}
                allPokemon={allPokemon}
                error={error}
              />
            )}
          />
          <Route path="/saved" component={SavedPokemon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
