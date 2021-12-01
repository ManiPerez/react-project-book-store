import React, {useState} from 'react';
import './styles.css';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import Buttom from 'react-bootstrap/Button'


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
        <div className="container">
            <h3>Carrito</h3>
            <div className="container">
                <div className="container-counter">
                    <div onClick={increment}><FiPlusCircle className="cart-icon" /></div>
                    <div><p>{count}</p></div>
                    <div onClick={decrement}><FiMinusCircle className="cart-icon" /></div>
                </div>
                <a className="add-cart" onClick={msg}>Agregar al carrito</a>
                <Buttom>Test Button</Buttom>
            </div>
        </div>
    )
}

export default ItemCount;