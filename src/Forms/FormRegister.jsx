import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef } from "react"

function FormLogin() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [category, setCategory] = useState("");

    const form = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form.current);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": formData.get('name'),
            "password": formData.get('password'),
            "age": formData.get('age'),
            "category": "Administrador",
            "image": "null"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://localhost:8080/trainer/',
            requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.success == true) {
                    navigate("/")
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

    function handleChangePassword(e) {
        const value = e.target.value;
        setPassword(value);
    }
    return (

        <>
            <div>
                <form className="form-control-plaintext" id="form" onSubmit={handleSubmit} ref={form}>
                    <div className='container'>
                        <div className='h1'>Registro
                            <h5>Ingresa tu nombre de usuario: </h5>
                            <input className='input' type="text"
                                onChange={handleChangeName}
                                name='name'
                                id='name'
                                placeholder='Cree un nombre de usuario: '
                                required />

                            <h5>Ingresa tu edad: :</h5>
                            <input className='input' type="number"
                                onChange={handleChangePassword}
                                name='age'
                                id='age'
                                placeholder='Escriba su edad (número): '
                                required />

                            <h5>Ingresa una contraseña segura:</h5>
                            <input className='input' type="password"
                                onChange={handleChangePassword}
                                name='password'
                                id='password'
                                placeholder='Cree una contraseña'
                                required />

                            <center>
                                <h5>Foto de perfil</h5>
                                <input className='input' type="file"
                                    image="image"
                                    id="image"
                                    placeholder='choosefile'
                                />
                            </center>

                            <div><input className='button' type="submit" placeholder='login' /></div>

                            <Link to="/">
                                <p><span><h6>
                                    ¿Ya tienes una cuenta?</h6></span></p>
                            </Link>

                        </div>
                    </div>

                </form>

            </div>
        </>
    );
}

export default FormLogin;