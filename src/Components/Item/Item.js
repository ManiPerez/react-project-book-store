import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ product }) => {

  return (
    <div class="card" style="width: 18rem;">
        <img src={product.img} class="card-img-top" alt={item.title} />
        <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">{product.author}</p>
            <p class="card-text">{product.category}</p>
            <p class="card-text">{product.price}</p>
            <a href="/#" class="btn btn-primary">Ver detalles</a>
        </div>
    </div>
  )
}

export default Item;