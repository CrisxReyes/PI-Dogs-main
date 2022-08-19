const GET_ALL_DOGS = 'GET_ALL_DOGS';

export function getAllDogs() {
    return function(dispatch){
     fetch("localhost:3001/temperaments")
        .then(response => response.json())
     fetch("localhost:3001/dogs")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_ALL_DOGS, payload: json });
        });
    }
}