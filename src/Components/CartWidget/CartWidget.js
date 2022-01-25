import React, { useContext} from 'react';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {

    const {totalCartCount} = useContext(CartContext);

    return(
        <button className="cartWidget">
            <FaShoppingCart className="cartWidget__icon"/>
            <span className="cartWidget__counter">{totalCartCount()}</span>
        </button>
    );
}

export default CartWidget