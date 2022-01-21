import React from 'react';
import { useState } from 'react';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const ItemCount = ({initial = 0, stock = 43})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity + 1)
       }
   }

   const decrement = () => {
       if(quantity > 0) {
           setQuantity(quantity - 1)
       }     
   }
   
   return(
       <div align="center">          
            <div className="itemCount">
                <FaShoppingCart className="itemCount__icon"/>
                <h3>Carrito</h3>
                <div className="itemCount__counter">
                    <div onClick={() => decrement() }><FiMinusCircle className="itemCount__quantity-btn" /></div>
                    <div className="itemCount__quantity"><p>{quantity}</p></div>
                    <div onClick={() => increment() }><FiPlusCircle className="itemCount__quantity-btn" /></div>
                </div>
                <a href="/#" className="itemCount__btn" onClick={() => increment() }>Ver detalle</a>
            </div>   
       </div>
   )

}
export default ItemCount