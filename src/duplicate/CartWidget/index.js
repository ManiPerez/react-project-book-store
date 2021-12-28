import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './styles.css';

const CartWidget = () => {
    return (
        <button className="navbar__cart">
            <FaShoppingCart className="navbar__cart-icon"/>
            <div className="navbar__cart-counter">0</div>
        </button>
    )
}

export default CartWidget;