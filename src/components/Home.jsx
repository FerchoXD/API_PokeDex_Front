import Wikemon from '../images/Wikemon.png'
import Banner from '../images/banner.jpg'
import About from '../images/about_img.png'
import { Link } from "react-router-dom"
import '../styles/home/css/bootstrap.min.css'
import '../styles/home/css/style.css'
import '../styles/home/css/responsive.css' 

function Home() {
    return (
          <div className="wrapper">
          <div id="content">

      <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="full">
                                <a className="logo" href="index.html"><img src={Wikemon} alt="#" /></a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="full">
                                <div className="right_header_info">
                                    <ul>x
                                    
                                        <li className="dinone"><Link to="/pokemons">Pokemons</Link></li>
                                        <li className="dinone"><Link to="/crear">Crear pokemon</Link></li>
                                        <li className="dinone"><Link to="/">Fan Fiction</Link></li>
                                        <li className="dinone"><Link to="/coments">Comentarios</Link></li>
                                        <li className="dinone"><Link to="/">Foro</Link></li>

                                        <li className="dinone">ㅤㅤㅤㅤㅤㅤ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div classNameName="slider_section banner_bg">
                <img src={Banner}/>
                <div className="container">
                    <center><div className="text_box">
                    <h1 className="GFG">Bienvenido</h1>
                        <h2 className="GFG">Un saludo, en esta wiki encontrarás todo lo relacionado a Pokémon:<br/> 
                Información, entretenimiento y demás. Esperemos tengas buena estancia aquí. ¡Explore!</h2>
                    </div></center>
                </div>
            </div>

            <div id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_box">
                                <h2 className="GFG">Novedades</h2>
                                <p className="GFG">Atrapa, combate y entrena Pokémon en la región de Paldea, una vasta tierra llena de lagos, cimas montañosas, páramos, poblaciones pequeñas y grandes ciudades. Explora un mundo completamente abierto a tu propio paso y recorre a través de la tierra, el agua y el aire a lomos del Pokémon legendario Koraidon, que puede cambiar de forma en Pokémon Scarlet, o sobre el Pokémon legendario Miraidon, que puede cambiar de forma en Pokémon Violet. Elige entre Sprigatito, Fuecoco o Quaxly para que sea tu primer compañero Pokémon antes de lanzarte en tu aventura a través de Paldea.</p>
                                <a href="https://scarletviolet.pokemon.com/es-mx/" >¡Descubre más de los nuevos juegos Pokémon Scarlet y Pokémon Violet!</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_img">
                                <figure><img src={About} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <footer>
                        <div className="copyright">
                            <div className="container">
                                <p>©2022 Derechos reservados.</p>
                                <br/>
                            </div>
                        </div>
                </footer>
    </div>
    </div>
     );
}

export default Home;