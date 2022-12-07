import { useState, useEffect } from 'react'
import Card from './Card_pokemon'

function ListPokemon() {

    const [pokemons, setPokemons] = useState([])

    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    //console.log(myHeaders)
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    useEffect(() => {
        console.log(myHeaders)
        fetch('http://localhost:8080/pokemon', requestOptions)
            .then(reponse => reponse.json())
            .then(data => {
                setPokemons(data)
            })
    }, [])

    return (
        <div>

            <center><h1>Lista de Pokémon</h1></center>
            <div class="PokeList">
                <div class="PokeList">
                    {pokemons && pokemons.map(pokemon => (
                        <Card
                            name={pokemon.name}
                            image={pokemon.image}
                            type={pokemon.type}
                            species={pokemon.species}
                        />
                    ))}</div>
            </div>
        </div>

    );
}

export default ListPokemon;