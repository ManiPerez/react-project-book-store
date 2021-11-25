import React from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import './styles.css';

const CartWidget = () => {
    return (
        <div className="cart">
            <FaShoppingCart className="cart-icon"/>
            <div className="cart-counter">0</div>
        </div>
    )
}

export default CartWidget;