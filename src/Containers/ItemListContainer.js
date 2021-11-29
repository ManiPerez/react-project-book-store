import React from 'react';
import './styles.css'
import ItemCount from '../Components/ItemCount.js';

const ItemListContainer = ({greeting1, greeting2, book, author, img}) => {
    return (
        <header className="App-header">

            <div className="box-container">

                <div className="box">
                    <img src="./images/readingImg.png" className="reading-img" alt="reading-img" />
                    <p>
                    {greeting1}
                    </p>
                    <p>
                    {greeting2}
                    </p>
                </div>
              
                <div className="box">
                    <img src={img}  className="book-img" alt={book} />
                    <h3>Libro: {book}</h3>
                    <p>Autor: {author}</p>
                </div>

                <div className="box">
                    <ItemCount getInitial={1} getStock={15} onAdd={'Cantidad total:'} />
                </div>

            </div>

        </header>

    )
}

export default ItemListContainer;