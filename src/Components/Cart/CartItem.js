import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './styles.css';
import { AiFillDelete } from 'react-icons/ai';

const CartItem = ({id, img, title, author, quantity}) => {

    const {totalPrice, removeFromCart} = useContext(CartContext)

    return (
        <tr>
            <td><img src={img} alt="Portada del libro" /></td>
            <td>
                <ul>
                    <li><h3>{title}</h3></li>
                    <li><p>{author}</p></li>
                </ul>
            </td>
            <td className='cartView__quantity'>{quantity}</td>
            <td>${totalPrice()}</td>
            <td>
                <button onClick={() => removeFromCart(id)}>
                    <AiFillDelete />
                </button>
            </td>
        </tr>
    )
};

export default CartItem;
