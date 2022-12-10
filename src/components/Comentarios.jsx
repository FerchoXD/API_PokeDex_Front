import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Comments.css";
import { StatusCode } from "react-http-status-code";

function Comentarios() {
  let boolean = localStorage.getItem('bool')
  console.log(boolean)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const form = useRef(null);
  let autor = localStorage.getItem('name')

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form.current);
    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var raw = JSON.stringify({
      name: autor,
      title: formData.get("title"),
      description: formData.get("description"),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/comment", requestOptions)
      .then(response => {
        console.log(response)
        switch (response.status) {
          case 200:
            alert("Éxito")
            break;
          case 201:
            alert("201. Comentario publicado")
            return response.json()
            break;
          case 400:
            alert("Error 400: Favor reintente de nuevo")
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
            alert("Error 500: El nombre de usuario ya existe")
            return response.json()
            break;
        }
      })
      .then((data) => {
        //console.log(data)
        if (data.httpStatus === 'CREATED') {
          alert("Comentario creado Correctamente")
          navigate("/forum")
        } else {
          alert("Error al crear comentario")
          navigate("/forum")
        }
      })
      .catch((error) => console.log("error", error));
  }

  function handleChangeTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleChangeDescription(e) {
    const value = e.target.value;
    setDescription(value);
  }

  return boolean ? (
    <>
      <div className="todo">
        <div className="comment">
          <h1 className="text-center">Crea un comentario</h1>
          <form
            id="form"
            onSubmit={handleSubmit}
            ref={form}
            className="needs-validation"
          >
            <div className="form-group was-validated">
              <div className="autor">
                <label className="form-label">Titulo</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ingresa un titulo"
                  onChange={handleChangeTitle}
                  name="title"
                  id="title"
                  required
                />
                <div className="invalid-feedback">El titulo es requerido</div>
              </div>

              <div className="comentario">
                <label className="form-label">Ingresa los comentarios</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese comentarios aquí"
                  onChange={handleChangeDescription}
                  name="description"
                  id="description"
                  required
                />
                <div className="invalid-feedback">
                  La descripcion es requerida
                </div>
              </div>

              <input
                type="submit"
                value="Comentar"
                className="btn btn-success w-100"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  ):<h1>Loggeate por favor!!!</h1>;
}

export default Comentarios;
