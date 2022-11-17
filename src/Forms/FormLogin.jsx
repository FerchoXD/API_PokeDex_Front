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
        const username = formData.get('name')
        //console.log('http://localhost:8080/trainer/'+username)
        fetch('http://localhost:8080/trainer/search/'+username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data.data.password)
                console.log(data.status)

                const user = {
                    userName: formData.get('name'),
                    userPassword: formData.get('password')
                }

                console.log(user.userPassword);
                //console.log(data)

                if(data.status != 500){
                    if(user.userPassword == data.data.password){
                        navigate("/home")
                    }else{
                        navigate("/adondevasputa")
                    }
                }else{
                    navigate("/adondevasputa")
                    console.log("Usuario no encontrado")
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

    function handleChangeAge(e) {
        const value = e.target.value;
        setAge(value);
    }

    function handleChangeCategory(e) {
        const value = e.target.value;
        setCategory(value);
    }

    return (
        <>
            <div className='container'>
                <form className="form" id="form" onSubmit={handleSubmit} ref={form}>

                    <label>Ingresa tu nombre de usuario: </label>
                    <input type="text"
                        onChange={handleChangeName}
                        name='name'
                        id='name'
                        placeholder='Write a username'
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