import React from 'react';

export default function Card({name, image, height}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{height}</h5>
        </div>
    )
}