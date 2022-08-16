import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/home"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/nueva-raza"}>Añadir nueva raza</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}
