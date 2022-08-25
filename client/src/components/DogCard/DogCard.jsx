import React from 'react';

export default function Card({name, image, height, temperament}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{height}</h5>
            <h5>{temperament}</h5>
            <img src={image} alt="not found" width='250px' height='200px'/>
        </div>
    )
}