import Form from "../Forms/Form";
import Wikemon from '../images/Wikemon.png'
import '../styles/home/css/regist.css'
import { Link } from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";

function CPokemons() {
    let boolean = localStorage.getItem('bool')

    return boolean ? (
        <div className="App">
            <div class="wrapper">
                <div id="content">
                    <header>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="full">
                                        <a class="logo" href="/home"><img src={Wikemon} /></a>
                                    </div>
                                </div>
                                <Header />
                            </div>
                        </div>
                    </header>
                    <Form />
                    <ul class="colorlib-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <Footer></Footer>

                </div>
            </div>
        </div>
    ) : <h1>Loggeate por favor!!!</h1>;
}

export default CPokemons;