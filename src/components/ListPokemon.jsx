import {useState, useEffect} from 'react'
import Pokemon from './Pokemon'
import '../styles/PokeList.css' 

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


function ListPokemon() {

    

    const [pokemons, setPokemons] = useState([])

    useEffect( () => {
        fetch('http://localhost:8080/pokemon', requestOptions)
        .then (reponse => reponse.json())
        .then (data => {
            setPokemons(data)
            console.log(JSON.stringify(data))
        })
    }, [])

    return (
        <div class="patterns pt1"> 
        
            <center><h1>Lista de Pokémon</h1></center>
            <div class="PokeList">
            { pokemons.map( pokemon => (
                <Pokemon
                    name = {pokemon.name}
                    image = {pokemon.image}
                                   />                
            ))}</div></div>
     
     );
}

export default ListPokemon;