import { useNavigate } from 'react-router-dom'
import { useState, useRef } from "react"
import { useSelector } from 'react-redux';
import axios from 'axios';
import React from 'react';

function Prueba() {
    const [archivos, setArchivos] = useState(null);
    const pokemon = useSelector(state => state.pokemon)
    const navigate = useNavigate()
    let id = pokemon.id;

    function handleChangeImage(e) {
        const value = e.target.files
        setArchivos(value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let url = 'http://localhost:8080/file/pokemon/' + id;
        let token = localStorage.getItem('token')
        console.log(token);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        var formData = new FormData();
        formData.append('file', archivos[0])
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        };
        fetch('https://cors-anywhere.herokuapp.com/' + url, requestOptions)
            .then(res => res.json())
            .then(res =>  console.log(res))
            .catch(err => console.log(err))
    }
    //console.log(id)

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className='form-control-plaintext'>
                    <div className='container'>
                        <div className='h1'>Imagen del nuevo pokemon
                            <div>
                                <input className='input' type="file" name='files' multiple placeholder='Sube un archivo' onChange={handleChangeImage}></input>
                                <input type="submit" placeholder="Subir Archivo"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Prueba;