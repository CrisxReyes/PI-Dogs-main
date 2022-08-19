import React from 'react';

export default function Card({name, image, height}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{height}</h5>
            <img src={image.url} alt="img not found" width="200px" height="250px" />
        </div>
    )
}