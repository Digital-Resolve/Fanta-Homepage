import React from 'react';
import './index.css';
import FantaLogo from '../../assets/Logo.png';


const Navbar = () => {
    return (
        
        <div className="navbar">
                <img className="nav-logo" src={FantaLogo} alt="" />
                    <ul className="menu">
                        <li className='menu-item'>
                            Home
                        </li>
                        <li className='menu-item'>
                            About
                        </li>
                        <li className='menu-item'>
                            Products
                        </li>
                        <li className='menu-item'>
                            Contact Us
                        </li>
                    </ul>
            </div>

            
            
    )
}

export default Navbar