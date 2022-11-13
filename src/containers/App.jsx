import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import Register from "../components/Register";
import Comentarios from "../components/comentarios";
import ListPokemons from "../components/ListPokemon";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/registro" element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/pokemons" element={<ListPokemons/>}/>
      <Route path="/comentarios" element={<Comentarios/>}></Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </div>
  );
}

export default App
