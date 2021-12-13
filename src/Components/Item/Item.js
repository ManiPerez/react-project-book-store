import React from 'react';
import './styles.css';

const Item = ({ product }) => {

  return (

    <div className="product-box">
        <div className="product-content">
          <img className="product-img" src={product.img} alt={product.title} />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-author">{product.author}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-price">$ {product.price}</p>
        </div>
        <button className="product-btn">Ver detalles</button>
    </div>
  )
}

export default Item;