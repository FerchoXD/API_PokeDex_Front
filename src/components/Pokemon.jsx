import { json } from "react-router-dom";

function Pokemon({name, image, type, species}) {
    return ( <>
        <div>
            <img src={image} />
            <span>{name}</span>
            <p>{type}</p>
            <p>{species}</p>
        </div>
    </> );
}

export default Pokemon;