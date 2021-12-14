import React from 'react';
import './styles.css';
import Item from '../Item/Item';
  
const ItemList = ({ books }) => {
    return (
        <div className="container">
          {books.map(book => 
              <Item key={book.rank} book={book} />
              )}  
        </div>
    )
}

export default ItemList


