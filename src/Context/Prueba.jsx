import { useRef } from "react"
import { useState } from "react"
import { useContext } from "react"
import UserContext  from "../context/UserContext"
//import UserContext from "./UserContext"

const Prueba = () =>{
    console.log("prueba")
    //const {user} = useContext(UserContext);
    //const {user} = useContext(UserContext)
    const[userContext, setUserContext] = useContext(UserContext)
    //const logged = localStorage.getItem('logged')
    console.log(user)
    return(
        <>
            <h1>Component Prueba</h1>
            <h2>User: {JSON.stringify(userContext)}</h2>
            <div>
                {user && <p>Hola soy el user {userContext.name}</p>}
            </div>
            <h2>User: {JSON.stringify(userContext)}</h2>
            <div>
                {user && <p>Hola soy el user {userContext.isLogged}</p>}
            </div>
        </>
        
    )
    
}

export default Prueba;