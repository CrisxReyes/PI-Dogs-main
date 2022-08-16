import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from'./LandingPage.module.css';
import icon from '../../img/git_icon.png';

export default function LandingPage(){
    return (
        <div className={s.container}>
             <div className={s.navLandingPage}>
                <a href="https://github.com/CrisxReyes">
                     <img className={s.github} src={icon} alt="" />
                </a>
            </div>
            <div className={s.info}>
                <h1>DOGSPEDIA</h1>
                <p>Encuentra toda la información acerca de tu raza favorita.</p>
                <NavLink id={s.boton_home} class="btn btn-primary btn-lg" to="/home">Comenzar</NavLink>
            </div>
            
        </div>
    )
}