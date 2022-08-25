import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByName } from '../../actions';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
  
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