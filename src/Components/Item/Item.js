import React from 'react';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';

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
        <button className="product-btn">Agregar al <FaShoppingCart className="product-cart-icon"/></button>
    </div>
  )
}

export default Item;