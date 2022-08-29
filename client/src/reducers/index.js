const initialState = {
    dogsLoaded: [],
    temperaments: [],
    dogDetails: {},
    dogsFiltered: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_DOGS':
            if(state.dogsFiltered.length === 0) {
                state.dogsFiltered = action.payload;
            }
            return {
                ...state,
                dogsLoaded: action.payload
            }
        case 'GET_DOGS_BY_NAME':
            return {
                ...state,
                dogsFiltered: action.payload
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
        case 'ORDER_BY_NAME':
            if (action.payload === 'asc') {
                state.dogsFiltered && state.dogsFiltered.sort((a,b)=> {
                    if(a.name === b.name) return 0;
                    if(a.name < b.name) return -1;
                    if(a.name > b.name) return 1;
                })
            }
            if(action.payload === 'desc'){
                state.dogsFiltered && state.dogsFiltered.sort((a,b)=> {
                    if(a.name === b.name) return 0;
                    if(a.name < b.name) return 1;
                    if(a.name > b.name) return -1;
                })
            }  
            return state;
        default:
            return state;
        }
}

export default rootReducer;