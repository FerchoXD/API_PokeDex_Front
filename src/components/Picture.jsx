import { useNavigate } from 'react-router-dom'
import { useState, useRef, useContext } from "react"
import UserContext from "../Context/UserContext"
import Input from '../Forms/Input'

function Picture() {
    const value =  useContext(UserContext)
    const form = useRef(null);
    const navigate = useNavigate();
    const [image, setImage] = useState("");

    function handleSubmit (e) {
        e.preventDefault();

    const formData = new FormData(form.current);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "image": formData.get('imagen')
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://localhost:8080/file/pokemon/',
        requestOptions)
        .then(res => res.json())
        .then(data => {
            if (data.success == true) {
                console.log(value)
                console.log(data)
                navigate("/home")
            } else {
                alert("Usuario no creado")
                navigate("*")
            }
        })

        .catch(err => console.error(err))
}

function handleChangeImage(e){
    const value = e.target.value;
    setImage(value);
}

    return ( 
        <>
         <div className="form">
            <form onSubmit={handleSubmit} ref={form}>
            <div className="input-container">
            <Input
                label="Elige tu imagen"
                type="file" 
                name="imagen" 
                id="imagen"
                classname="input"
                placeholder="Sube una imagen"
                onChange={handleChangeImage}
                />
                <p>{value}</p>
            <div><h1>{value}</h1></div>
            </div>
        </form>
     </div>
        </>
     );
}

export default Picture;