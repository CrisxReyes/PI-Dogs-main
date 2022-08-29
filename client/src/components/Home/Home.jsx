import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, getTemperaments, orderByName } from '../../actions';
import DogCard from '../DogCard/DogCard';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';

export default function Home(){
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogsFiltered);
    const temperaments = useSelector((state) => state.temperaments);
    
    //estados locales para paginado 
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage; //indice del ultimo dog 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog); //divide el array de dogs en el numero de dogs por pagina

    //ESTADOS PARA FILTROS
    const [sources, setSources] = useState('all');
    const [byTemper, setByTemper] = useState('all');
    //ESTADOS PARA ORDENAR 
    const [weights, setWeights] = useState('asc');

    function handleClickAlphabetical(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
    }

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getTemperaments());
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
                <select defaultValue='ALP' onChange={e => handleClickAlphabetical(e) }>
                    <option value='ALP' disabled>
                        Alphabetical order
                    </option>
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>
                <select>
                    <option value='all'>Todas</option>
                    <option value='created'>Agregadas</option>
                    <option value='api'>Existentes</option>
                </select>
                <select>
                    <option value="asc">0-100</option>
                    <option value="desc">100-0</option>
                </select>
                <select>
                    <option value="all">Todas</option>
                    {
                        temperaments && temperaments.sort((a,b)=> {
                            if(a.name === b.name) return 0;
                            if(a.name < b.name) return -1;
                            if(a.name > b.name) return 1;
                        }).map(t => (
                            <option value={t.name} key={t.id}>{t.name}</option>
                        ))
                    }
                </select>
                <SearchBar/>
                <Paginado dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
                {
                    currentDogs && currentDogs.map(d => {
                        return(
                         <DogCard key={d.id} name={d.name} height={d.height} image={d.image} temperament={d.temperament} id={d.id}/>
                        );
                    })
                }
            </div>
        </div>
    )
}