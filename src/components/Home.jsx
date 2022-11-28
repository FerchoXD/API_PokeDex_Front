import Wikemon from '../images/Wikemon.png'
import Banner from '../images/banner.jpg'
import About from '../images/about_img.png'
import { Link } from "react-router-dom"
import '../styles/home/css/bootstrap.min.css'
import '../styles/home/css/style.css'
import '../styles/home/css/responsive.css' 

function Home() {
    return (
          <div class="wrapper">
          <div id="content">

      <header>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="full">
                                <a class="logo" href="index.html"><img src={Wikemon} alt="#" /></a>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="full">
                                <div class="right_header_info">
                                    <ul>x
                                    
                                        <li class="dinone"><Link to="/pokemons">Pokemons</Link></li>
                                        <li class="dinone"><Link to="/crear">Crear pokemon</Link></li>
                                        <li class="dinone"><Link to="/">Fan Fiction</Link></li>
                                        <li class="dinone"><Link to="/coments">Comentarios</Link></li>
                                        <li class="dinone"><Link to="/">Foro</Link></li>

                                        <li class="dinone">ㅤㅤㅤㅤㅤㅤ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="slider_section banner_bg">
                <img src={Banner}/>
                <div class="container">
                    <center><div class="text_box">
                    <h1 class="GFG">Bienvenido</h1>
                        <h2 class="GFG">Un saludo, en esta wiki encontrarás todo lo relacionado a Pokémon:<br/> 
                Información, entretenimiento y demás. Esperemos tengas buena estancia aquí. ¡Explore!</h2>
                    </div></center>
                </div>
            </div>

            <div id="about" class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="about_box">
                                <h2 class="GFG">Novedades</h2>
                                <p class="GFG">Atrapa, combate y entrena Pokémon en la región de Paldea, una vasta tierra llena de lagos, cimas montañosas, páramos, poblaciones pequeñas y grandes ciudades. Explora un mundo completamente abierto a tu propio paso y recorre a través de la tierra, el agua y el aire a lomos del Pokémon legendario Koraidon, que puede cambiar de forma en Pokémon Scarlet, o sobre el Pokémon legendario Miraidon, que puede cambiar de forma en Pokémon Violet. Elige entre Sprigatito, Fuecoco o Quaxly para que sea tu primer compañero Pokémon antes de lanzarte en tu aventura a través de Paldea.</p>
                                <a href="https://scarletviolet.pokemon.com/es-mx/" >¡Descubre más de los nuevos juegos Pokémon Scarlet y Pokémon Violet!</a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="about_img">
                                <figure><img src={About} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <footer>
                        <div class="copyright">
                            <div class="container">
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