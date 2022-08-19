const initialState = {
    dogsLoaded: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogsLoaded: action.payload
            }
        default:
            return state;
        }
}

export default rootReducer;