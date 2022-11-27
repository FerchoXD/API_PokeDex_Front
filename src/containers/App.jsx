import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../reducer/store";
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Comentarios from "../components/comentarios";
import ListPokemons from "../components/ListPokemon";
import Login from "../Forms/Login";
import Register from "../Forms/Register";
import CPokemons from "../components/CPokemon";
import Picture from "../components/Picture";
import PokemonContext from "../context/PokemonContext";
import Forum from "../components/Forum";
import Prueba from "../context/Prueba"
import Cards from "../components/Cards";
import CardsPokemon from "../components/Card_pokemon";
import TraerPokemons from "../components/traerPokemons";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Routes>
            <Route path="/picture" element={<Picture />} />
            <Route path="/crear" element={<CPokemons />} />
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path="/pokemons" element={<ListPokemons />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/forum" element={<Forum/>} />
            <Route path="/pokemon" element={<TraerPokemons/>} />
            <Route path="/coments" element={<Cards/>} />
          </Routes>
        </Provider>
    </div>
  );
}

export default App
