import { createStore } from 'redux';
import PokemonReducer from "./reducers/PokemonReducer";

const store = createStore(PokemonReducer)

export default store;