import "../styles/NotFound.css"
import PikachuNotFound from "../images/pikachu-5992504_1280.png"
import { Link} from "react-router-dom"
import "../styles/notfound.css"
import Login from "../Forms/Login"

function NotFound() {

    return (<>
    <div className="body_notfound">
     <div class="container">
        <img class="ops" src={PikachuNotFound} />
        <br />
        <h3>Error 404</h3>
        <br />
        <h3>Lo sentimos esta pagina no fue encontrada !!</h3>
        <br />
        <Link to="/" class="buton">Regresar</Link>
    </div>
    </div>

    </>); 
}

export default NotFound;