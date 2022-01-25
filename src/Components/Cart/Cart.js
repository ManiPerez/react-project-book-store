import React, { useContext } from 'react';
import './styles.css';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, totalPrice, totalCartCount, emptyCart} = useContext(CartContext)

  return (
    <section className='cartView'>
      {
        cart.length > 0 ?
      
        <table>
            <thead>
              <tr>
                  <th>Portada</th>
                  <th>Detalle</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th></th>
              </tr>
            </thead>
            <tbody>
            {
              cart.map((prod) => (
                <CartItem {...prod} />
              ))
            }              
            </tbody>
            <tfoot>
              <tr className='cartView__total'>
                <th></th>
                <th><h4>Total:</h4></th>
                <th><p>{totalCartCount()}</p></th>
                <th>${totalPrice()}</th>
                <th></th>
              </tr>
              <tr>
                <th colspan="5">
                  <div className='cartView__btns'>
                    <Link className='btn buy' to='/payment'>Finalizar compra</Link>
                    <button className='btn delete' onClick={emptyCart}>Vaciar carrito</button>
                  </div>
                </th>
              </tr>
            </tfoot>
        </table>
       : 
        <div className='cartView__empty'>
          <h2>No tienes productos en tu Carrito</h2>
          <Link className='btn cart' to='/'>Volver al inicio</Link>
        </div>
      }
    </section>
  )
};

export default Cart;
