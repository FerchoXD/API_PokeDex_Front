import { useNavigate } from 'react-router-dom'
import { useState, useRef, useContext } from "react"
import { useSelector } from 'react-redux';
import Input from '../Forms/Input'

import PokemonContext from "../context/PokemonContext"

function Picture() {
    //<p>{value}</p>
    //       <div><h1>{value}</h1></div>
    //const {pokemon} = useContext(PokemonContext)
    //const value =  useContext(PokemonContext)
    const pokemon = useSelector(state => state.pokemon)
    function prueba() {
        console.log('Soy función prueba')
        console.log(pokemon.name);
        let aux = pokemon.name;
        console.log(aux);
        console.log(pokemon.id);
        let id = pokemon.id;
        console.log(id);
    }

    const form = useRef(null);
    const navigate = useNavigate();
    const [imagen, setImagen] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        let id = pokemon.id;

        const formData = new FormData(form.current);
        var myHeaders = new Headers();
        myHeaders.append('Access-Control-Allow-Origin','Content-Type', 'image/jpeg');

        var formdata = new FormData();
        formdata.append("file", formData.get("imagen"));

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/file/pokemon/"+id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    function handleChangeImage(e) {
        const value = e.target.files[0];
        setImagen(value);
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit} ref={form}>
                    <div className="input-container">
                        <Input
                            label="Elige tu imagen"
                            type="file"
                            name="imagen"
                            id="imagen"
                            classname="input"
                            placeholder="Sube una imagen"
                            onChange={handleChangeImage}
                        />
                        <input type='submit' placeholder='Sube la imagen'></input>
                        <button type='button' onClick={prueba}>Prueba</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Picture;