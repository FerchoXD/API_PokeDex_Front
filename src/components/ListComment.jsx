import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Cards'
function ListComment() {

    const [comments, setComments] = useState([])


    useEffect(() => {
        fetch('http://localhost:8080/comment/')
            .then(reponse => reponse.json())
            .then(data => {
                setComments(data)
            })
    }, [])

    return (
        <div className='contenedor-comentarios'>
            <div class="patterns_pt1">
                <center><p className='p-text'>Lista de Comentarios</p></center>
                <div className='contenedor-btn'>
                    <center>
                        <button className='btn-comments'>
                            <Link to="/comentarios">
                                comentar
                            </Link>
                        </button>
                    </center>
                </div>
                
                { comments && comments.map( comment => (
                    <Card
                        autor = {comment.autor}
                        title = {comment.title}
                        description = {comment.description}
                                       />                
                ))}</div>
        </div>
    );
}

export default ListComment;