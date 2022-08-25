import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../actions';

export default function DogDetail(){
    const dispatch = useDispatch();
    const dog = useSelector((state) => state.dogDetails);
    const { id } = useParams();

    useEffect(() => {
         dispatch(getDetails(id));
    },[dispatch, id])

    return(
        <div>
            <img src={dog.image} alt="not found" width='250px' height='200px'/>
            <h3>{dog.name}</h3>
            <h5>{dog.height}</h5>
            <h5>{dog.weight}</h5>
            <h5>{dog.temperament}</h5>
            <h5>{dog.life_span}</h5>
        </div>
    )
}