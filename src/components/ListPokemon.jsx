import { useState, useEffect } from 'react'
import Card from './Card_pokemon'
import Wikemon from '../images/Wikemon.png'
import '../styles/home/css/regist.css'
import { Link } from "react-router-dom"
import SearchComponent from "../components/SearchPokemon"
import Header from './Header'
import Footer from "./Footer";

function ListPokemon() {
    let boolean = localStorage.getItem('bool')
    console.log(boolean)

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

    return boolean ? (
        <div className="App">
            <div class="wrapper">
                <div id="content">
                    <header>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="full">
                                        <a class="logo" href="/home"><img src={Wikemon} /></a>
                                    </div>
                                </div>
                                <Header></Header>
                            </div>
                        </div>
                    </header>
                    <div>

                        <center><h1>Lista de Pokémon</h1></center>
                        <div class="PokeList">
                            <div className="container-fluid">
                                <SearchComponent />
                            </div>
                            <div class="PokeList">
                                {pokemons && pokemons.map(pokemon => (
                                    <Card
                                        name={pokemon.name}
                                        image={pokemon.image}
                                        // type={pokemon.type}
                                        species={pokemon.species}
                                    />
                                ))}</div>
                        </div>
                    </div>
                    <ul class="colorlib-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Footer></Footer>

                </div>
            </div>
        </div>
    ) : <h1>Logeate por favor!!!!</h1>;
}

export default ListPokemon;