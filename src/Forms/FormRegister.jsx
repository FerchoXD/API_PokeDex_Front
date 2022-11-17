import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef } from "react"
import "../styles/FormLogin.css"

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
                if(data.success == true){
                    navigate("/")
                }else{
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
            <div className='container'>
                <form className="form" id="form" onSubmit={handleSubmit} ref={form}>
                    <h1>Registro</h1>
                    <label>Ingresa tu nombre de usuario: </label>
                    <input type="text"
                        onChange={handleChangeName}
                        name='name'
                        id='name'
                        placeholder='Write a username: '
                        required />

                    <label>Ingresa tu edad: :</label>
                    <input type="number"
                        onChange={handleChangePassword}
                        name='age'
                        id='age'
                        placeholder='Write your age: '
                        required />

                    <label>Ingresa una contraseña segura:</label>
                    <input type="password"
                        onChange={handleChangePassword}
                        name='password'
                        id='password'
                        placeholder='Write a safe password'
                        required />

                    <input type="submit" placeholder='login' />

                    <Link to="/Register">
                        <p><span>
                            You do not have an account?</span></p>
                    </Link>

                </form>

            </div>
        </>
    );
}

export default FormLogin;