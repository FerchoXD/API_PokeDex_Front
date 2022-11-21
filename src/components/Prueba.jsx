import { useNavigate } from 'react-router-dom'
import { useState, useRef} from "react"
import { useSelector } from 'react-redux';
import Input from '../Forms/Input'
import axios from 'axios';
import React from 'react';

function Prueba() {
    const [archivos, setArchivos] = useState(null);
    function SubirArchivos(e){
        setArchivos(e)
    }
    const InsertarArchivos = async() => {
        const f = new FormData();
        f.append('files', archivos[0])
        await axios.put("http://localhost:8080/file/pokemon/127", f)
        .then(response => {
            console.log(response)
            }).catch(error => {console.log(error)})
    } 
    return ( 
        <>
        <div>
            <input type="file" name='files' multiple placeholder='Sube un archivo' onChange={(e)=> SubirArchivos(e.targetfiles)}></input>
            <button onClick={InsertarArchivos}>Subir imagen</button>
        </div>
        </>
     );
}

export default Prueba;