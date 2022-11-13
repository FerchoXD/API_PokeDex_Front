import { useState, useEffect, useContext, useRef } from 'react'

function Comentarios() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const form = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form.current);

        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                autor: formData.get('email'),
                title: formData.get('title'),
                description: formData.get('description')
            })
        })
            .then(res => res.json())
            .then(data => setUser(data.data))
            .catch(err => console.error(err))
    }

    function handleChangeAutor(e) {
        const value = e.target.value;
        setAutor(value);
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
            <form action="" id='form' onSubmit={handleSubmit} ref={form}>
                <div className="navbar">
                    <img src='./src/assets/pokbola.png'></img>
                    <a href="/" className='logo'>POKECOMMENTS</a>
                    <img src='./src/assets/pokbola.png'></img>
                </div>
                <div className="contenedor_principal">

                    <div className="autor">
                        <label>Usuario</label>
                        <input type="text" placeholder="@Username"
                            onChange={handleChangeAutor}
                            name='autor'
                            id='autor'
                            required
                        />
                    </div>

                    <div className="autor">
                        <label>Titulo</label>
                        <input type="text" placeholder="Ejemp: 'Mi nuevo entrenador'"
                            onChange={handleChangeTitle}
                            name='title'
                            id='title'
                            required
                        />
                    </div>

                    <div className="comentario">
                        <label>Ingresa los comentarios</label>
                        <input type="text" placeholder="Ingrese comentarios aquí"
                            onChange={handleChangeDescription}
                            name='description'
                            id='description'
                            required

                        />
                    </div>

                    <label>
                        <input type="submit" value="Log in" id='btn-login' />
                    </label>
                </div>
            </form>
        </>

    );

}

export default Comentarios;