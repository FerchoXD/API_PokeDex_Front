import { useState, useEffect, useContext, useRef } from "react";
import "../styles/Comments.css";

function Comentarios() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const form = useRef(null);
  let autor = localStorage.getItem('name')

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form.current);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      autor: autor,
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
      .then((response) => response.json())
      .then((result) => console.log(result))
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

  return (
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
  );
}

export default Comentarios;
