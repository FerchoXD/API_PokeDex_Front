function Pokemon({name, image}) {
    return ( <>
        <div>
            <img src={image} />
            <span>{name}</span>
        </div>
    </> );
}

export default Pokemon;