import React, {useState} from 'react';
import './styles.css';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Carrito</h5>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary" onClick={increment}><FiPlusCircle /></button>
                    <p class="btn btn-outline-primary">{count}</p>
                    <button type="button" class="btn btn-outline-primary" onClick={decrement}><FiMinusCircle /></button>
                </div>
                <p class="card-text">Productos: <ItemCount getInitial={1} getStock={15} onAdd={'Cantidad total:'} /></p>                  
                <a href="/#" class="btn btn-primary" onClick={msg}>Sumar al carrito</a>
            </div>
        </div>
    )
}

export default ItemCount;