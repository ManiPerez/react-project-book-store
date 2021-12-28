import React from 'react';
import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return(
        <button className="cartWidget">
            <FaShoppingCart className="cartWidget__icon"/>
            <div className="cartWidget__counter">0</div>
        </button>
    );
}

export default CartWidget