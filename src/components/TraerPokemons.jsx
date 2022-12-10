import React, { useState } from "react"
import { useEffect } from "react"
import Cards from "../components/Card_pokemon"
import "../styles/card_pokemon.css"


function TraerPokemons() {
  let boolean = localStorage.getItem('bool')
  console.log(boolean)

  const [pokemon, setPokemon]=useState([])
  const [loadmore, setLoadmore]=useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getPokemon = async () =>{
    const res = await fetch(loadmore)
    const data = await res.json()

    setLoadmore(data.next)

    function createPokemonObject(result){
      result.forEach(async(pokemon)=>{
       const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data = await res.json()

       setPokemon(currentList =>[...currentList, data])
      })
    }
    createPokemonObject(data.results)
    await console.log(pokemon)
  }

  useEffect(() =>{
    getPokemon()
  }, [])

  return boolean ? (
    <div className="app-container">
      <h1>EVOLUCIÓN DE POKEMON</h1>
      <div className="pokemon-container">
        <div className="all-container">
          { pokemon.map((pokemon, index) => 
            <Cards 
            id ={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            />
            )
          }
        </div>
        <button className="load-more" onClick={()=> getPokemon()}>Cargar más </button>
      </div>
      
          
    </div>
  ):<h1>Loggeate Por favor</h1>;
}

export default TraerPokemons;
