import React, { useState } from 'react';
import logo from '../images/Logo .svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            {/* Logo */}
            <a href='/' className="logo">
                <img src={logo} alt='app-logo' />
            </a>

            {/* Mobile Hamburger Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Services</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/'>Reservations</a></li>
                <li><a href='/'>Order Online</a></li>
                <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;