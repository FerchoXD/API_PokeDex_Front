import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useContext } from "react"
import Input from "../Forms/Input";
import "../styles/FormPokemon.css"
import Prueba from "../context/Prueba"
import UserContext from "../context/UserContext"

import PokemonContext from "../context/PokemonContext"

function Form() {

    //const value = useContext(PokemonContext);
    const [user, setUser] = useState(null)

    const form = useRef(null);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [specie, setSpecie] = useState("");
    const [type, setType] = useState("");
    const [pokemon, setPokemon] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(form.current);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": formData.get('name'),
            "species": formData.get('especie'),
            "type": formData.get('type'),
            "image": "null"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://localhost:8080/pokemon/',
            requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data.data.id)
                console.log(data.success)
                console.log(data)
                console.log(data.data.name)
                let id = data.data.id
                let name = data.data.name
                //console.log(id)
                //console.log(name)
                if (data.success == true) {
                    context(id, name)
                    alert("Usuario creado")
                    navigate("/prueba")
                } else {
                    alert("Usuario no creado")
                    //avigate("*")
                }
            })

            .catch(err => console.error(err))
    }

    function context(id, name) {
        if (pokemon) {
            setPokemon(null)
        } else {
            setPokemon({
                id: id,
                name: name
            })
        }
        console.log(pokemon)
    }

    function handleChangeName(e) {
        const value = e.target.value;
        setName(value);
    }

    function handleChangeSpecie(e) {
        const value = e.target.value;
        setSpecie(value);
    }

    function handleChangeType(e) {
        const value = e.target.value;
        setType(value);
    }
    return (
        <PokemonContext.Provider value={{pokemon, setPokemon }}>
            <div className="form">
                <form onSubmit={handleSubmit} ref={form}>
                    <div className="input-container">
                        <Input
                            label="Nombre"
                            type="text"
                            name="name"
                            placeholder="Ejem: 'PokSar'"
                            id="name"
                            classname="input"
                            onChange={handleChangeName}
                        />
                        <Input
                            label="Especie"
                            type="text"
                            name="especie"
                            id="especie"
                            classname="input"
                            placeholder="Ejem: 'nidoran'"
                            onChange={handleChangeSpecie}
                        />
                        <Input
                            label="Tipo"
                            type="text"
                            name="type"
                            id="type"
                            classname="input"
                            placeholder="Ejem: 'veneno' "
                            onChange={handleChangeType}
                        />
                    </div>

                    <div className="button-container">
                        <Input
                            type="submit"
                            classname="button"
                            value="Login"
                        />
                    </div>
                    {pokemon && JSON.stringify(pokemon)}
                </form>
            </div>
        </PokemonContext.Provider>
    )
}

export default Form;