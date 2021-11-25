import React from 'react';
import readingImg from './readingImg.png';

const ItemListContainer = () => {
    return (
        <header className="App-header">
            <img src={readingImg} className="reading-img" alt="reading-img" />
            <p>
            Te damos la bienvenida a The Book Corner!
            </p>
            <p>
            Variedad de libros al alcance de un click
            </p>
        </header>
    )
}

export default ItemListContainer;