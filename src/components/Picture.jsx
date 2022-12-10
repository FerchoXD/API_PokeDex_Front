import { useNavigate } from 'react-router-dom'
import { useState, useRef } from "react"
import { useSelector } from 'react-redux';
import axios from 'axios';
import React from 'react';

function Prueba() {
    const [archivos, setArchivos] = useState(null);
    const SubirArchivos = e => {
        setArchivos(e)
    }
    const pokemon = useSelector(state => state.pokemon)
    const navigate = useNavigate()
    let id = pokemon.id;
    //console.log(id)
    const InsertarArchivos = (e) => {
        e.preventDefault();
        let url = 'http://localhost:8080/file/pokemon/' + id;

        let token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");

        var formdata = new FormData();
        formdata.append("file", archivos);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <div>
                <form className='form-control-plaintext'>
                    <div className='container'>
                        <div className='h1'>Imagen del nuevo pokemon
                            <div>
                                <input className='input' type="file" name='files' multiple placeholder='Sube un archivo' onChange={(e) => SubirArchivos(e.target.files)}></input>
                                <button className='button' onClick={InsertarArchivos}>Subir imagen</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Prueba;