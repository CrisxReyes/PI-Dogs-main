const initialState = {
    dogsLoaded: [],
    temperaments: [],
    dogDetails: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogsLoaded: action.payload
            }
        case 'GET_DOGS_BY_NAME':
            return {
                ...state,
                dogsLoaded: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return{
                ...state,
                temperaments: action.payload
            }
        case 'GET_DETAILS':
            return {
                ...state,
                dogDetails: action.payload
            }
        default:
            return state;
        }
}

export default rootReducer;