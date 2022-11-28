import { useState, useEffect } from 'react'
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
        <div class="patterns pt1">

            <center><h1>Lista de Comentarios</h1></center>
            <div class="PokeList">
            <div class="PokeList">
            { comments && comments.map( comment => (
                <Card
                    autor = {comment.autor}
                    title = {comment.title}
                    description = {comment.description}
                                   />                
            ))}</div>
            </div>
        </div>

    );
}

export default ListComment;