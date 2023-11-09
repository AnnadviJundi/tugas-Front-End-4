import React from 'react';

const Hello = (props) => {
    const nama = props.nama
    return (
        <div>
            <p>Selamat Siang Pak {nama}</p>
        </div>
    );
}

export default Hello;
