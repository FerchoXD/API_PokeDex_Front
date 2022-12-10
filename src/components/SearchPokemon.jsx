import React, {useState, useEffect} from 'react'
import Card from './Card_pokemon'
function SearchPokemon() {
    const [pokemons, setPokemons] = useState([])
    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

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
  //setear los hooks useState
  
  const showData = async () => {
    const response = await fetch('http://localhost:8080/pokemon', requestOptions)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 1 
    /*let results = []
   if(search.length <= 4)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            
            <tbody>
                { results.map( (pokemon) => (
                    <Card
                    name={pokemon.name}
                    image={pokemon.image}
                    type={pokemon.type}
                    species={pokemon.species}
                />                  
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SearchPokemon;