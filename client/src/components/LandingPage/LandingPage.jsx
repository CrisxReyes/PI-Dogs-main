import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from'./LandingPage.module.css';
import icon from '../../img/git_icon.png';
import linked from '../../img/linkedin.png';

export default function LandingPage(){
    return (
        <div className={s.container}>
            <div className={s.navLandingPage1}>
                <a href="https://www.linkedin.com/in/cristopher-reyes" target='_blank' rel='noopener noreferrer'>
                     <img className={s.linked} src={linked} alt="" />
                </a>
            </div>
            <div className={s.info}>
                <h1>DOGSPEDIA</h1>
                <p>Encuentra toda la información acerca de tu raza favorita.</p>
                <NavLink id={s.boton_home} class="btn btn-primary btn-lg" to="/home">Comenzar</NavLink>
            </div>
            <div className={s.navLandingPage}>
                <a href="https://github.com/CrisxReyes" target='_blank' rel='noopener noreferrer'>
                     <img className={s.github} src={icon} alt="" />
                </a>
            </div>
        </div>
    )
}