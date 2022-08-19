import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../actions';
import DogCard from '../DogCard/DogCard';

export default function Home(){
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogsLoaded);

    useEffect(() => {
        dispatch(getAllDogs());
    },[dispatch])
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    return(
        <div>
            <h1>LISTA DE RAZAS</h1>
            <button onClick={e => {handleClick(e)}}>Cargar datos de razas</button>
            <div>
                <select>
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>
                <select>
                    <option value='all'>Todas</option>
                    <option value='created'>Creadas</option>
                    <option value='api'>Existentes</option>
                </select>
                {
                    allDogs && allDogs.map(d => {
                        return(
                         <DogCard name={d.name} height={d.height}/>
                        );
                    })
                }
            </div>
        </div>
    )
}