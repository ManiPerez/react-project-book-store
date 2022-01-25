import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ( { product } ) => {

    const {addToCartItem, onCart} = useContext(CartContext)

    const [count, setCount] = useState(0);

    const handleAddToCart = () => {
        if (count > 0) {
            addToCartItem({
                id: product.id,
                title: product.title,
                author: product.author,
                price: product.price,
                img: product.img,
                quantity: count
            });
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
                    <div className='itemDetail__label'>
                        <p className='itemDetail__category'><span>{product?.category}</span></p>
                        <p className='itemDetail__text label'>{product?.label}</p>
                    </div>                   
                    <p className='itemDetail__price'>${product?.price}</p>                   
                    <p className='itemDetail__text stock'>{product?.stock} unidades disponibles</p>                  
                    <p className='itemDetail__text'>Editorial: {product?.editorial}</p>
                    <p className='itemDetail__text'>Páginas: {product?.pages}</p>
                    <p className='itemDetail__text'>Año de publicación: {product?.publication}</p>
                    <p className='itemDetail__description'>Descripción: <span>{product?.description}</span></p>
                    <p className='itemDetail__reviews'>Opinión: "{product?.reviews}"</p>
                    <div className="itemDetail__btn">
                        {
                            !onCart(product?.id) 
                                ?
                                    <ItemCount 
                                        count={count} 
                                        setCount={setCount} 
                                        maxQuantity={product?.stock}
                                        onAddToCart={handleAddToCart} 
                                    /> 
                                :
                                    <Link className="itemDetail__cartLink" to="/cart">Ver carrito</Link>
                        }                                   
                    </div>          
                </div>
            </section>
        </article>
    )
}

export default ItemDetail