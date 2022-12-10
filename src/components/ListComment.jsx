import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Cards'
import Wikemon from '../images/Wikemon.png'
import '../styles/home/css/regist.css'
import Header from './Header'
import Footer from "./Footer";

function ListComment() {

    const [comments, setComments] = useState([])

    let boolean = localStorage.getItem('bool')
    console.log(boolean)


    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    //console.log(myHeaders)
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch('http://localhost:8080/comment', requestOptions)
            .then(reponse => reponse.json())
            .then(data => {
                setComments(data)
            })
    }, [])

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
                                <Header></Header>
                            </div>
                        </div>
                    </header>
                    <div class="">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <center><h1>Lista de Comentarios</h1></center>
                    </div>
                    <div class="main-agileinfo2">
                        <div class="agileits-top">
                            <div>
                                <div class="patterns_pt1">

                                    {comments && comments.map(comment => (
                                        <Card
                                            autor={comment.autor}
                                            title={comment.title}
                                            description={comment.description}
                                        />
                                    ))}</div>
                                <center>
                                    <button className='btn-comments'>
                                        <Link to="/comentarios">
                                            comentar
                                        </Link>
                                    </button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <br />
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
                    <br />
                    <Footer></Footer>

                </div>
            </div>
        </div>
    ) : <h1>Loggeate por favor!!!</h1>;
}

export default ListComment;