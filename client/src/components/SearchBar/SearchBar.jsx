import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDogsByName } from '../../actions';

export default function SearchBar(props) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    //const navigate = useNavigate(); //hook para navegar entre paginas

    // useEffect(() => {
    //     dispatch(getAllDogs());
    // },[dispatch]);
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getDogsByName(search));
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input type="text" placeholder="Search Dog..." onChange={ (e) => {
                        setSearch(e.target.value);
                    }}/>
                </div>
                <button type='submit'>SEARCH</button>
            </form>
        </div>
    )
  
}