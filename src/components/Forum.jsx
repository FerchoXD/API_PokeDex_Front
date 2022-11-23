import { useNavigate } from 'react-router-dom'
import Input from '../Forms/Input'
import axios from 'axios';
import React from 'react';

function Forum() {
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

export default Forum;