import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
//import  {ProtectedRoute} from "../components/ProtectedRoute";
import { useState } from "react";
import store from "../reducer/store";
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Comentarios from "../components/comentarios";
import ListPokemons from "../components/ListPokemon";
import Login from "../Forms/Login";
import Register from "../Forms/Register";
import CPokemons from "../components/CPokemon";
import Picture from "../components/Picture";

import Forum from "../components/Forum";
import Prueba from "../context/Prueba"
import Cards from "../components/Cards";
import CardsPokemon from "../components/Card_pokemon";
import TraerPokemons from "../components/traerPokemons";
import ListComment from "../components/ListComment";

import UserContext from "../context/UserContext";
import LoginPrueba from "../Context/LoginPrueba";

function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Provider store={store}>
        <Routes>
          <Route path="/crear" element={<CPokemons />} />
          <Route path="/home" element={<Home />} />
          <Route path="/picture" element={<Picture />} />
          <Route path="/pokemons" element={<ListPokemons />} />
          <Route path="/comentarios" element={<Comentarios />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/pokemon" element={<TraerPokemons />} />
          <Route path="/coments" element={<ListComment />} />
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/prueba" element={<Prueba />}></Route>
          <Route path="/pruebaLogin" element={<LoginPrueba />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </UserContext.Provider>
  );
}

export default App;
