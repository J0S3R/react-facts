import logo from '../images/logo-icon.png';
import React from 'react';
import '../style.css';


function Navbar(){
    const navbar = (
        <nav>
            <img className='nav--icon' src={logo}></img>
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    )
    return (navbar);
}

export default Navbar;