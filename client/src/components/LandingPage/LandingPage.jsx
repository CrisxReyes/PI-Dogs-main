import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from'./LandingPage.module.css';

const image = require('../../img/landing_dogs.jpg').default;

export default function LandingPage(){
    return (
        <div className={s.container}>
            <button>HOME</button>
        </div>
    )
}