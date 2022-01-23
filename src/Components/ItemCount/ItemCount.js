import React from 'react';
import './styles.css';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const ItemCount = ({ maxQuantity, count, setCount, onAddToCart })=> {

    const increment = () => {
        count < maxQuantity && setCount(count + 1)
    }

    const decrement = () => {
        count > 0 && setCount(count - 1)
    }

    return( 

        <div>
            <div className="itemCount">
                <button className="itemCount__quantity-btn" onClick={decrement}>
                    <FiMinusCircle className="itemCount__quantity-icon" />
                </button>
                <span className="itemCount__quantity">
                    {count}
                </span>
                <button className="itemCount__quantity-btn" onClick={increment}>
                    <FiPlusCircle className="itemCount__quantity-icon" />
                </button>
            </div> 
            <div className="itemCount__btn">
                <button onClick={onAddToCart}>Agregar al carrito</button>
            </div>
        </div>       
    )
}

export default ItemCount