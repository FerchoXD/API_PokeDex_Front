import { useState, useEffect } from 'react'

function ListForum() {

    const [forums, setForums] = useState([])

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch('http://localhost:8080/forum', requestOptions)
            .then(reponse => reponse.json())
            .then(data => {
                setForums(data)
                console.log(JSON.stringify(data))
            })
    }, [])

    return (
        <>
            <div class="patterns pt1">

                <center><h1>Lista de Pokémon</h1></center>
                <div class="PokeList">
                    {pokemons.map(pokemon => (
                        <Pokemon
                            name={pokemon.name}
                            image={pokemon.image}
                        />
                    ))}</div></div>
        </>
    )
}

export default ListForum;