import React from 'react';
import './styles.css';

// const items = [{title: 'El Principito', author: 'Antoine de Saint-Exupéry', price: '500', img: './images/el-principito.jpg'},
//                {title: 'Las Aventuras de Sherlock Holmes', author: 'Arthur Conan Doyle', price: '650', img: './images/sherlock-holmes.jpg'}]

const Item = ({ product }) => {

  return (
    <div class="card" style="width: 18rem;">
        <img src={product.img} class="card-img-top" alt={item.title} />
        <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">{product.author}</p>
            <p class="card-text">{product.category}</p>
            <p class="card-text">{product.price}</p>
            <a href="/#" class="btn btn-primary">Ver detalle</a>
        </div>
    </div>
  )
}

export default Item;