import React from 'react';
import './styles.css';


const ItemDetail = ( { product = [] } ) => {

    return (
        <article className="itemDetail">
            <section className='itemDetail__box'>
                <picture className='itemDetail__img'>
                    <img src={product.img} alt={product.title} />
                </picture>
                <div className='itemDetail__info'>
                    <h2 className='itemDetail__title'>{product.title}</h2>
                    <h4 className='itemDetail__author'>Autor: <span>{product.author}</span></h4>
                    <p className='itemDetail__category'><span>{product.category}</span></p>
                    <p className='itemDetail__price'>${product.price}</p>
                    <p className='itemDetail__pages'>Páginas: {product.pages}</p>
                    <p className='itemDetail__publication'>Año de publicación: {product.publication}</p>
                    <p className='itemDetail__description'>Descripción: <span>{product.description}</span></p>
                    <p className='itemDetail__reviews'>Opinión: "{product.reviews}"</p>
                    <div className='itemDetail__button'><button>Agregar al carrito</button></div>
                </div>
            </section>
        </article>
    )
}

export default ItemDetail