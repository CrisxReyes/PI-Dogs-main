import axios from 'axios';
const GET_ALL_DOGS = 'GET_ALL_DOGS';
const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME';
const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
const GET_DETAILS = 'GET_DETAILS';

export function getAllDogs() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({ type: GET_ALL_DOGS, payload: json.data });
    }    
}

export function getDogsByName(name) {
    return async function(dispatch) {
        var json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({ type: GET_DOGS_BY_NAME, payload: json.data });
    }
}

export function getTemperaments(){
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/temperaments");
        return dispatch({ type: GET_TEMPERAMENTS, payload: json.data });
    }
}

export function getDetails(id) {
    return async function(dispatch) {
        var json = await axios.get(`http://localhost:3001/dogs/${id}`);
        return dispatch({ type: GET_DETAILS, payload: json.data });
    }
}