import React from 'react';
import readingImg from './readingImg.png';

const ItemListContainer = ({greeting1, greeting2}) => {
    return (
        <header className="App-header">
            <img src={readingImg} className="reading-img" alt="reading-img" />
            <p>
            {greeting1}
            </p>
            <p>
            {greeting2}
            </p>
        </header>
    )
}

export default ItemListContainer;