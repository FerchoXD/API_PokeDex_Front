import { useRef } from "react"
import { useContext } from "react"
//import UserContext  from "../context/UserContext"
import UserContext from "./UserContext"

const Prueba = () =>{
    //const {user} = useContext(UserContext);
    const {user} = useContext(UserContext)
    return(
        <>
            <h1>Component Prueba</h1>
            <h2>User: {JSON.stringify(user)}</h2>
            <div>
                {user && <p>Hola soy el user {user.name}</p>}
            </div>
            <h2>User: {JSON.stringify(user)}</h2>
            <div>
                {user && <p>Hola soy el user {user.isLogged}</p>}
            </div>
        </>
        
    )
    
}

export default Prueba;