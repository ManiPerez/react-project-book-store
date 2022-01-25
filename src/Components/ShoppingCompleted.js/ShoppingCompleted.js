import React from 'react';
import './styles.css';
import { GiSpellBook } from 'react-icons/gi';

const ShoppingCompleted = () => {
  return (
    <section className='shopCompleted'>
        <div className='shopCompleted__img'>
          <img src='/images/shopping-completed.png' alt='Compra completada'/>
        </div>
        <div className='shopCompleted__text'>
          <p>Gracias por tu compra!</p>
          <p>Que disfrutes tu lectura <GiSpellBook className='shopCompleted__icon' /></p>
        </div>
    </section>
  )
};

export default ShoppingCompleted;
