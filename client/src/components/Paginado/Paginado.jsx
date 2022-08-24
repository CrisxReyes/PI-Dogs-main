import React from 'react';
import s from './Paginado.module.css';

export default function Paginado({dogsPerPage, allDogs, paginado}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++){
         pageNumbers.push(i);
    }

    return(
        <div>
            <ul className={s.paginado}>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <li key={number} className={s.number}>
                            <a onClick={() => paginado(number)}>{number}</a>
                        </li> 
                    ))
                }
            </ul>
        </div>
    )
}