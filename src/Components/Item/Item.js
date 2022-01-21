import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    return (
        <article className="cardItem">
            <div className="cardItem__content">
                <img className="cardItem__img" src={product.img} alt={product.title} />
                <h3 className="cardItem__title">{product.title}</h3>
                <p className="cardItem__author">{product.author}</p>
                <p className="cardItem__category">{product.category}</p>
                <p className="cardItem__price">$ {product.price}</p>
            </div>
            <Link className="cardItem__btn" to={`/detail/${product.id}`}>Ver detalle</Link>
        </article>
    )
}

export default Item

