const initialState = {
    pokemon: {}
}

const PokemonReducer = (state = initialState, action) => {
    switch(action.type){
        case "ACTION01":
            return {pokemon : action.value}
        default:
            return state;

    }
}

export default PokemonReducer;