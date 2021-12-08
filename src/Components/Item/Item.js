import React from 'react';
import './styles.css';

const Item = ({ product }) => {

  return (

    <div className="product-box">
        <img src={product.img} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="product-author">{product.author}</p>
        <p className="product-category">{product.category}</p>
        <p className="product-price">$ {product.price}</p>
        <a href="/#" className="product-btn">Ver detalles</a>
    </div>
  )
}

export default Item;