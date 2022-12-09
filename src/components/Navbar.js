import '../stylesheets/Navbar.css';
import React from 'react';


const Navbar = () => {
    return(
        <div className='container-principal'>
            <div className='brand-container'>
                Lucas Droguett
            </div>
            <ul className='lista-link'>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>About me</li>
            </ul>
        </div>
    );
}

export default Navbar;