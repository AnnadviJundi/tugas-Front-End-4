import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
        <div class="container">
            <ul>
                <li><a href="#home">Beranda</a></li>
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#services">Layanan</a></li>
                <li><a href="#contact">Kontak</a></li>
            </ul>
        </div>
    </nav>
        </div>
    );
}

export default Navbar;
