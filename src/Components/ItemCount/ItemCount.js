import React, {useState} from 'react';
import './styles.css';
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

        <div className="producto-box">
            <h3>Carrito</h3>
            <div className="container-counter">
                <span className="icon" onClick={increment}><FiPlusCircle /></span>
                <span className="counter">{count}</span>
                <span className="icon" onClick={decrement}><FiMinusCircle /></span>
            </div>
            <p className="product-count">Productos: <ItemCount getInitial={1} getStock={15} onAdd={'Cantidad total:'} /></p>
            <a href="/#" className="btn" onClick={msg}>Sumar al carrito</a>
        </div>
    )
}

export default ItemCount;