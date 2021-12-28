import React, {useState} from 'react';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';


const ItemCount = ({initial = 0, stock = 0, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {

        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
       if (quantity > 0) {
           setQuantity(quantity - 1)
       }     
   }

    return (

        <div className="item-count-box">
            <FaShoppingCart className="item-count-icon"/>
            <h3>Carrito</h3>
            <div className="container-counter">
                <div onClick={() => increment() }><FiPlusCircle className="cart-icon" /></div>
                <div className="cart-counter"><p>{quantity}</p></div>
                <div onClick={()=> decrement() }><FiMinusCircle className="cart-icon" /></div>
            </div>
            <a href="/#" className="btn" onClick={() => increment() }>Ver detalle</a>
        </div>
    )
}

export default ItemCount;