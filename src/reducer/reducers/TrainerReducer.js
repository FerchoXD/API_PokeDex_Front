const initialState = {
    trainer: {}
}

const TrainerReducer = (state = initialState, action) => {
    switch(action.type){
        case "TRAINER":
            return {trainer : action.value}
        default:
            return state;

    }
}

export default TrainerReducer;