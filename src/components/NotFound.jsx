import "../styles/NotFound.css"
import PikachuNotFound from "../images/pikachu-5992504_1280.png"
import { Link } from "react-router-dom"
import "../styles/notfound.css"

function NotFound() {
    return (<>
    <div className="body">
    <img width="380px" height="500px" src={PikachuNotFound}>
</img>
<div className="message-box">
  <h1>404</h1>
  <p>Page not found</p>
  <div className="buttons-con">
    <div className="action-link-wrap">
      <Link to="/">Go to login</Link>
    </div>
  </div>
</div>
    </div>

    </>); 
}

export default NotFound;