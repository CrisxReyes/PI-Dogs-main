import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../actions';
import DogCard from '../DogCard/DogCard';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';

export default function Home(){
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogsLoaded);
    //estados locales para paginado 
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage; //indice del ultimo dog 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog); //divide el array de dogs en el numero de dogs por pagina

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

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
                <SearchBar/>
                <Paginado dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado} />
                {
                    currentDogs && currentDogs.map(d => {
                        return(
                         <DogCard name={d.name} height={d.height} image={d.image}/>
                        );
                    })
                }
            </div>
        </div>
    )
}