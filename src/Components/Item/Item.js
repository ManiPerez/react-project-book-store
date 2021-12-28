import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {

    const handleClick = (evt) => {
        evt.stopPropagation()
        console.log(`hice click en Item ${product.id}`)
    }

    return (
        <div className="cardItem" onClick={handleClick}>
            <div className="cardItem__content">
                <img className="cardItem__img" src={product.img} alt={product.title} />
                <h3 className="cardItem__title">{product.title}</h3>
                <p className="cardItem__author">{product.author}</p>
                <p className="cardItem__category">{product.category}</p>
                <p className="cardItem__price">$ {product.price}</p>
            </div>
            <Link className="cardItem__btn" to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item

