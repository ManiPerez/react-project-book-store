import React from 'react';
import './styles.css';

const Item = ({ product }) => {

  return (

    <div className="producto-box">
        <img src={product.img} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.author}</p>
        <p>{product.category}</p>
        <p className="producto-precio">$ {product.price}</p>
        <a href="/#" className="producto-btn">Ver detalles</a>
    </div>
  )
}

export default Item;