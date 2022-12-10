import "../styles/login.css"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Wikemon.png"
import { useState, useRef } from "react";
import { StatusCode } from "react-http-status-code";

function Login() {
  const navigate = useNavigate();
  const form = useRef(null)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeName(e) {
    const value = e.target.value
    setName(value)
  }

  function handleChangePassword(e) {
    const value = e.target.value
    setPassword(value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form.current)
    const username = formData.get('name')
    const userPassword = formData.get('password')
    var raw = JSON.stringify({
      "nombreUsuario": username,
      "password": userPassword
    });
    
    fetch('http://localhost:8080/auth/login',{ 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'  
      },
      body: raw,
      redirect: 'follow'
    })
      .then(res => {
        let status = res.status;
        localStorage.setItem('status', status)
        switch (res.status) {
          case 200:
            alert("200. Inicio de sesión exitosa")
            localStorage.setItem('bool', true)
            return res.json();
            break;
          case 201:
              alert("Datos incorrectos")
              let status = false
              return res.json();
            break;
          case 400:
              alert("Error 400: Favor de ingresar bien los datos")
            break;
          case 401:
              alert("Error 401: Respuesta no autenticada. No autorizado")
            break;
          case 403:
              alert("Error 403: Lo sentimos, pero no tiene los permisos necesarios")
            break;
          case 404:
              alert("Error 404: No encontrado")
              break;
          case 500:
              alert("Aquí hay error en el back...Debe enviar un 404 en vez de 500")
              break; 
        }})
      .then(data => {
        console.log("-------")
        //console.log(data)
        //console.log(data.httpStatus)
        let status = localStorage.getItem('status')
        localStorage.setItem('token', data.token)
        if (status == 200) {
          Salvar(name)
        } else if (status == 500)
          alert("Usuario no existente")
        else 
          alert ('Datos incorrectos')
      })
      .catch(err => console.log(err))
  }

  function Validar(name) {
    if(password === pass){
      alert("Usuario existente")
      Salvar(name)
    }else{ 
      alert("Contraseña incorrecta")
      navigate("/")
    }
  }

  function Salvar(name){
    localStorage.setItem('name', name)
    //alert("Información Guardada Correctamente")
    navigate("/home")
  }

  return (
    <div className="todo_log">
      <form onSubmit={handleSubmit} ref={form} className="login">
        <div className="center">
          <div className="logo">
            <img src={Logo} />
          </div>
          <h1 className="label-welcome">
            Bienvenido
          </h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" onChange={handleChangeName} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" name="password" onChange={handleChangePassword}/> 
        </div>
        <button type="submit" className="btn btn-dark w-100">Iniciar sesión</button>
        <br />
        <Link to="./Register" className="redirect" >Aun no tienes una cuenta? </Link>
      </form>

    </div>
  );
}

export default Login;