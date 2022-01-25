import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { TiTick } from 'react-icons/ti';

const Notification = () => {

  const { cart } = useContext(CartContext)

  return (
      <div className='notification'>
          <string>
            {cart.quantity !== 1 ? `${cart.quantity} productos agregados` : `${cart.quantity} producto agregado`} al carrito <TiTick />
          </string>
      </div>
  )
};

export default Notification;
