import { useState, useEffect } from 'react'
import Card from './Card_pokemon'

function ListPokemon() {

    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        fetch('http://localhost:8080/pokemon/')
            .then(reponse => reponse.json())
            .then(data => {
                setPokemons(data)
            })
    }, [])

    return (
        <div class="">

            <center><h1>Lista de Pokémon</h1></center>
            <div class="PokeList">
            <div class="PokeList">
            { pokemons && pokemons.map( pokemon => (
                <Card
                    name = {pokemon.name}
                    image = {pokemon.image}
                    type = {pokemon.type}
                    species = {pokemon.species}
                                   />                
            ))}</div>
            </div>
        </div>

    );
}

export default ListPokemon;