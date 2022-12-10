import Wikemon from '../images/Wikemon.png'
import Banner from '../images/banner.jpg'
import About from '../images/about_img.png'
import '../styles/home/css/bootstrap.min.css'
import '../styles/home/css/style.css'
import '../styles/home/css/responsive.css'
import Header from './Header'
import Footer from './Footer'

function Home() {
    let boolean = localStorage.getItem('bool')
    console.log(boolean)
    return boolean ? (
        <div className="wrapper">
            <div id="content">

                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="full">
                                    <a className="logo" href="/home"><img src={Wikemon} alt="#" /></a>
                                </div>
                            </div>
                            <Header />
                        </div>
                    </div>
                </header>
                <div classNameName="slider_section banner_bg">
                    <img src={Banner} />
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
                <Footer></Footer>
            </div>
        </div>
    ) : <h1>Loggeate por favor!!!!</h1>;
}

export default Home;