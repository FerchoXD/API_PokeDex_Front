import Inicio from "./Inicio"
import Novedad1 from "../imagenes/Novedad1.png"
import Novedad2 from "../imagenes/Novedad2.jpg"
import Novedad3 from "../imagenes/Novedad3.jpg"
import LogoPikachu from "../imagenes/PokeLogo.png"
import "../styles/Bodyhome.css"
import "../styles/Header.css"
import "../styles/Navbar.css"
import "../styles/logo.css"
import { Link } from "react-router-dom"


function Home() {

    return (
        <>
<div className="header">
        <div className="logo">
            <div className="titulo">
                <h1>WiKEMON</h1>
                <p>Todo sobre pokemon...</p>
            </div>
            <div className="logoimg">
            <img src={LogoPikachu}/>
            </div>
        </div>

        <div className="navbar">
        <div className="buscador">
            <div className="inputs">
                <input type="text" placeholder="Ingresa el pokemon a buscar"/>
            </div>
        </div>

        <div className="opciones">
            <nav className="nav">
                <ul>
                    <li><Link to="/">Crear Pokemon</Link></li>
                    <li><Link to="/">Fan Fictions</Link></li>
                    <li><Link to="/">Crear Pokemon</Link></li>
                    <li><Link to="/">Consejos</Link></li>
                    <li><Link to="/">Foro</Link></li>
                </ul>
            </nav>
        </div>

    </div>
</div>
    <div className="container">
                <div className="aside">
                <div className="subtitulo"><h2>Novedades</h2></div>
                        <div className="novedad">
                            <img className="novedadimg" src={Novedad1}></img>
                            <p>Los episodios de DP Battle Dimension se añaden a TV Pokemon</p>
                        </div>
                        <div className="novedad">
                            <img className="novedadimg" src={Novedad2}></img>
                            <p>Consigue a Eternatus variocolor en Pokemon Espada o Escudo</p>
                        </div>
                        <div className="novedad">
                            <img className="novedadimg" src={Novedad3}></img>
                            <p>Consigue a Eternatus variocolor en Pokemon Espada o Escudo</p>
                        </div>
                </div>

                <div className="contenido">
                    <>
                    <Inicio></Inicio>
                    </>
                </div>
            </div>



    </>
     );
}

export default Home;