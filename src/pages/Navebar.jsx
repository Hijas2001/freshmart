import React from 'react'
import './CSS/Navbar.css'
const Navebar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">MyStore</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navebar