import React, {useState} from 'react';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';


const ItemCount = ({getInitial, getStock, onAdd}) => {
    const [count, setCount] = useState(getInitial);
    const[stock] = useState(getStock);
    const[message] = useState(onAdd);

    const increment = () => {
        if (count >= 0 && count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

    const msg = () => {
        if (count >= 0 && count < stock){
            setCount(count + 1);
        }
        console.log(`${message} ${count}`)
    }
    return (

        <div className="item-count-box">
            <FaShoppingCart className="item-count-icon"/>
            <h3>Carrito</h3>
            <div className="container-counter">
                <div onClick={increment}><FiPlusCircle className="cart-icon" /></div>
                <div className="cart-counter"><p>{count}</p></div>
                <div onClick={decrement}><FiMinusCircle className="cart-icon" /></div>
            </div>
            <a href="/#" className="btn" onClick={msg}>Ver detalle</a>
        </div>
    )
}

export default ItemCount;