import React from 'react';

import Logo from '../logo.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
             <div className='nav-container'>
                <div className='nav-logo'>
                    <img src={Logo} alt="logo"/>
                </div>
                <div className='nav-links'>
                    <a href="#" className='nav-link'>About</a>
                    <a href="#" className='nav-link'>Services</a>
                    <a href="#" className='nav-link'>Pricing</a>
                    <a href="#" className='nav-link'>Blog</a>
                </div>
                <button className='nav-btn'>contact</button>
            </div>
            <h1 className='nav-title'>Portfilio</h1>
            <p className='nav-descr'>Agency provides a full service range including technical skills, design, business understanding.</p>
        </div>
        
    );
};

export default Navbar;