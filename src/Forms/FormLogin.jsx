import React from 'react'
import "../styles/iniciarS.css"
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
        const username = formData.get('name')
        //console.log('http://localhost:8080/trainer/'+username)
        fetch('http://localhost:8080/trainer/search/' + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        })
            .then(res => res.json())
            .then(data => {
                const user = {
                    userName: formData.get('name'),
                    userPassword: formData.get('password')
                }

                console.log(user.userPassword);
                //console.log(data)

                if (data.status != 500) {
                    if (user.userPassword == data.data.password) {
                        navigate("/home")
                    } else {
                        navigate("*")
                    }
                } else {
                    navigate("*")
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
            <div className="cover">
                <form className="form-control-plaintext" id="form" onSubmit={handleSubmit} ref={form}>
                
                        <div className='h1'>Inicio de Sesión
                            <h5>Ingresa tu nombre de usuario: </h5>
                            <input className='input' type="text"
                                onChange={handleChangeName}
                                name='name'
                                id='name'
                                placeholder='Escriba un nombre de usuario'
                                required />

                            <h5>Ingresa una contraseña segura:</h5>
                            <input className='input' type="password"
                                onChange={handleChangePassword}
                                name='password'
                                id='password'
                                placeholder='Escriba una contraseña'
                                required />

                            <div className="login-btn" type="submit" placeholder='login'>Iniciar sesion</div> 
                            <Link to="/Register">
                                <p><span><h6>
                                    ¿No tienes todavía una cuenta?</h6></span></p>
                            </Link>
                        </div>
                    

                </form>

            </div>
        </>
    );
}

export default FormLogin;