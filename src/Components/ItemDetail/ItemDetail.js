import React from 'react';
import { useState, useContext } from 'react';
import './ItemDetail.css';
import NotificationContext from '../../context/NotificationContext';


const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({target}) => {
        if(target.value <= maxQuantity && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ product, inputType = 'input' }) => {

    const Count = inputType === 'input' ? InputCount : ButtonCount

    const { setNotification } = useContext(NotificationContext)

    const addToCart = (count) => {
        setNotification('success',`Agregado al carrito ${count}`)
    }

    return (
        <div className="itemDetail">
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Portada</th>
                    <th>Título</th>
                    <th>Detalle</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Stock</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{product?.id}</td>
                    <td><img src={product?.img} alt={product?.title} /></td>
                    <td>{product?.title}</td>
                    <td>{product?.description}</td>
                    <td>{product?.author}</td>
                    <td>{product?.category}</td>
                    <td>$ {product?.price}</td>
                    <td>{product?.label}</td>
                    <td><Count onConfirm={addToCart} maxQuantity={product?.stock}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ItemDetail