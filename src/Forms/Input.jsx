import "../styles/Input.css"

function Input ({ type, label, classname, name, id, placeholder, onclick, onblur }) {
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
            />
        </>
    )
}

export default Input;