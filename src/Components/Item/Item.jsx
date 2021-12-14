import React from 'react';
import './styles.css';


const Item = ({books}) => {

  return (
    <div className="product-box">
      <div className="product-content">
        <img className="product-img" src={books.book_image} alt={books.title} />
        <h3 className="product-title">{books.title}</h3>
        <p className="product-author">{books.author}</p>
        <p className="product-category">{books.publisher}</p>
        <p className="product-category">{books.age_group}</p>
        <p className="product-price">$ {books.price}</p>
      </div>
      <button key={books.rank} className="product-btn">Ver detalles</button>
    </div>
  )
}

export default Item;