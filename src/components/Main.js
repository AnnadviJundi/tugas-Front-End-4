import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <div>
             <section id="home">
        <div class="container">
            <h2>Selamat datang di Beranda</h2>
            <p>Ini adalah tempat di mana Anda dapat menemukan informasi menarik tentang kami.</p>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>Tentang Kami</h2>
            <p>Kami adalah tim yang bersemangat untuk memberikan solusi terbaik kepada Anda.</p>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <h2>Layanan Kami</h2>
            <ul>
                <li>Desain Web</li>
                <li>Pengembangan Aplikasi</li>
                <li>Konsultasi IT</li>
            </ul>
        </div>
    </section>
        </div>
    );
}

export default Main;
