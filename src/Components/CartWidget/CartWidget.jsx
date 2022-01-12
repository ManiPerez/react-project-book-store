import React, {useState} from 'react';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {


    const [counter,setCounter] = useState(0);

    const counterCount = () => {
        setCounter(counter + 1)
    }
    return(
        <button className="cartWidget" onClick={counterCount} >
            <FaShoppingCart className="cartWidget__icon"/>
            <div className="cartWidget__counter">{counter}</div>
        </button>
    );
}

export default CartWidget