import "../styles/login.css"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Wikemon.png"
import { useState, useRef } from "react";

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
    fetch('http://localhost:8080/trainer/search/' + username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    })
      .then(res => res.json())
      .then(data => {
        let status = data.stuatus
        if (status !== 500) {
          let name = data.data.name
          let pass = data.data.password
          Validar(username, userPassword, name, pass)
        } else {
          alert("Usuario no existente")
        }

      })
      .catch(err => console.log(err))
  }

  function Validar(username, password, name, pass) {
    if(username === name && password === pass){
      alert("Usuario existente")
      Salvar(name)
      //navigate("/home")
    }else{ 
      alert("Usuario no existen")
      navigate("/")
    }
  }

  function Salvar(name){
    localStorage.setItem('name', name)
    alert("Información Guardada Correctamente")
    navigate("/home")
  }

  return (
    <div className="todo">
      <form onSubmit={handleSubmit} ref={form} className="login">
        <div className="center">
          <div className="logo">
            <img src={Logo} />
          </div>
          <label className="label-welcome">
            Bienvenido
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" onChange={handleChangeName} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" name="password" onChange={handleChangePassword} />
        </div>
        <button type="submit" className="btn btn-dark w-100">Submit</button>
        <br />
        <Link to="./Register" className="redirect" >Aun no tienes una cuenta? </Link>
      </form>

    </div>
  );
}

export default Login;