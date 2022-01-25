import React, { useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';

const CartWidget = () => {

    const {cart, totalCartCount} = useContext(CartContext);

    return(
        <>
            {cart.length > 0 
                ?
                    <button className="cartWidget">
                        <FaShoppingCart className="cartWidget__icon"/>
                        <span className="cartWidget__counter">{totalCartCount()}</span>
                    </button>
                :
                    <button className="cartWidget__empty">
                        <MdRemoveShoppingCart className="cartWidget__empty-icon"/>
                    </button>
            }
        </>
    );
}

export default CartWidget