import { useNavigate } from 'react-router-dom'
import { useState, useRef } from "react"
import { useSelector } from 'react-redux';
import Input from '../Forms/Input'
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
    let url = 'http://localhost:8080/file/pokemon/' + id;
    const InsertarArchivos = async () => {
        const f = new FormData();
        f.append('file', archivos[0])
        await axios.put(url, f)
            .then(response => {
                console.log(response)
                alert('Pokemon creado');
                navigate('/')
            }).catch(error => { console.log(error) })
    }
    return (
        <>
            <div>
                <form className='form-control-plaintext'>
                    <div className='container'>
                        <div className='h1'>Imagen del nuevo pokemon
                            <div>
                                <input className='input' type="file" name='files' multiple placeholder='Sube un archivo' onChange={(e) => SubirArchivos(e.targetfiles)}></input>
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