import { useContext } from "react"
//import UserContext  from "../context/UserContext"
import PokemonContext from "./PokemonContext";

const Prueba = () =>{
    //const {user} = useContext(UserContext);
    const {pokemon} = useContext(PokemonContext)
    return(
        <>
            <h1>Component Prueba</h1>
            <h2>Pokemon: {JSON.stringify(pokemon)}</h2>
            <div>
                {pokemon && <p>Hola soy el pokemon {pokemon.name}</p>}
            </div>
            <h2>Pokemon: {JSON.stringify(pokemon)}</h2>
            <div>
                {pokemon && <p>Hola soy el pokemon {pokemon.id}</p>}
            </div>
        </>
        
    )
    
}

export default Prueba;