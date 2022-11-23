import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../reducer/store";
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Comentarios from "../components/comentarios";
import ListPokemons from "../components/ListPokemon";
import FormLogin from "../Forms/FormLogin";
import FormRegister from "../Forms/FormRegister"
import CPokemons from "../components/CPokemon";
import Picture from "../components/Picture";
import PokemonContext from "../context/PokemonContext";
import Forum from "../components/Forum";
import Prueba from "../context/Prueba"

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Routes>
            <Route path="/picture" element={<Picture />} />
            <Route path="/crear" element={<CPokemons />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/" element={<FormLogin />} />
            <Route path="/Register" element={<FormRegister />} />
            <Route path='/home' element={<Home />} />
            <Route path="/pokemons" element={<ListPokemons />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="/pokemoncontext" element={<PokemonContext />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/forum" element={<Forum/>} />
          </Routes>
        </Provider>
    </div>
  );
}

export default App
