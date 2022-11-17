import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useContext } from "react"
import Input from "../Forms/Input";
import "../styles/FormPokemon.css"
import UserContext from "../Context/UserContext.js";

function Form() {
    const form = useRef(null);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [specie, setSpecie] = useState("");
    const [type, setType] = useState("");

    function handleSubmit (e) {
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
            if (data.success == true) {
                navigate("/picture")
            } else {
                alert("Usuario no creado")
                navigate("*")
            }
        })

        .catch(err => console.error(err))
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
        <UserContext.Provider value={name}>
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
                value={name}
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
                name="submit"
                classname="button"
                value="Login"
                 />
            </div>
        </form>
     </div>
</UserContext.Provider>
    ) 
}

export default Form;