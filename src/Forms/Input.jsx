import { useContext } from "react";
import PokemonContext from '../context/PokemonContext.js';
function Input ({ type, label, classname, name, id, placeholder, onclick, onblur }) {
    //const {value, setValue} = useContext(PokemonContext)
    return (
        <>
        <label>
            {label}
        </label>
        <input 
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className={classname}
            onClick={onclick}
            onBlurCapture={onblur}
            multiple
            />
        </>
    )
}

export default Input;