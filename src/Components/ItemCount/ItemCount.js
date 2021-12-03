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
        <div className="card text-center product__card">
            <div className="card-body">
                <h5 className="card-title">Carrito</h5>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={increment}><FiPlusCircle /></button>
                    <p className="btn btn-outline-primary">{count}</p>
                    <button type="button" className="btn btn-outline-primary" onClick={decrement}><FiMinusCircle /></button>
                </div>
                <p className="card-text">Productos: <ItemCount getInitial={1} getStock={15} onAdd={'Cantidad total:'} /></p>                  
                <a href="/#" className="btn btn-primary" onClick={msg}>Sumar al carrito</a>
            </div>
        </div>
    )
}

export default ItemCount;