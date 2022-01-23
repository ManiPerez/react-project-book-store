import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ( { product } ) => {

    const [cartCount, setCartCount] = useState(false);

    const addToCart = () => {
        setCartCount([]);
    };

    const onConfirm = ( quantity ) => {
        
        if(quantity !== 0) {
            addToCart(quantity);
            setCartCount(true);
        }      
    }

    return (
        <article className="itemDetail">
            <section className='itemDetail__box'>
                <picture className='itemDetail__img'>
                    <img src={product?.img} alt="Portada del libro" />
                </picture>
                <div className='itemDetail__info'>
                    <h2 className='itemDetail__title'>{product?.title}</h2>
                    <h4 className='itemDetail__author'>Autor: <span>{product?.author}</span></h4>
                    <p className='itemDetail__category'><span>{product?.category}</span></p>
                    <p className='itemDetail__price'>${product?.price}</p>
                    <p className='itemDetail__pages'>Páginas: {product?.pages}</p>
                    <p className='itemDetail__publication'>Año de publicación: {product?.publication}</p>
                    <p className='itemDetail__description'>Descripción: <span>{product?.description}</span></p>
                    <p className='itemDetail__reviews'>Opinión: "{product?.reviews}"</p>
                    <div className="itemDetail__btn">
                        {
                        !cartCount ? (
                            <ItemCount onConfirm={onConfirm} maxQuantity={product?.stock} />
                        ) : (
                            <Link className="itemDetail__cartLink" to="/cart">Ver carrito</Link>
                        )}
                    </div>                 
                </div>
            </section>
        </article>
    )
}

export default ItemDetail