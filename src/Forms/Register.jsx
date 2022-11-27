import "../styles/login.css"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Wikemon.png"
import { useRef, useState } from "react";

function Register() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const form = useRef(null)
  const navigate = useNavigate()

  function handleChangeName(e) {
    const value = e.target.value
    setName(value)
  }

  function handleChangePassword(e) {
    const value = e.target.value
    setPassword(value)
  }

  function handleChangeAge(e) {
    const value = e.target.value
    setAge(value)
  }

  function handleChangeSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form.current)
    const name = formData.get('name')
    const password = formData.get('password')
    const age = formData.get('age')
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": name,
      "password": password,
      "age": age,
      "category": "Trainer",
      "image": "null"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/trainer/", requestOptions)
      .then(response => response.json())
      .then(data => {
        let status = data.status
        if(status != 500){
          alert("Usuario Creado Correctamente")
          navigate("/")
        }else{
          alert("Usario NO Creado")
          navigate("/Register")
        }
      })
      .catch(error => console.log('error', error));

  }

  return (
    <div className="todo_log">
      <form className="login" onSubmit={handleChangeSubmit} ref={form}>
        <div className="center">
          <div className="logo">
            <img src={Logo} />
          </div>
          <h1 className="label-welcome">
            Registrate
          </h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={handleChangeName} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" name="password" onChange={handleChangePassword} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Edad</label>
          <input type="password" className="form-control" id="age" name="age" onChange={handleChangeAge} />
        </div>
        <button type="submit" className="btn btn-dark w-100">Submit</button>
        <Link to="/" className="redirect" >Ya tienes una cuenta? </Link>
        <br />
      </form>

    </div>
  );
}

export default Register;