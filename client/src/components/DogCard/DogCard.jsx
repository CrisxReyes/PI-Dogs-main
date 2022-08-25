import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({name, image, height, temperament, id}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{height}</h5>
            <h5>{temperament}</h5>
            <Link to={`/home/${id}`}>
                <img src={image} alt="not found" width='250px' height='200px'/>
            </Link>
        </div>
    )
}