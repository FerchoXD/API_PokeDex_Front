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
        const f = new FormData();
        f.append('file', archivos[0]);
        
        axios.put(url, f)
            .then(response => {
                console.log(response)
                alert('Pokemon creado');
                navigate('/Home')
            }).catch(error => { console.log(error) })
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