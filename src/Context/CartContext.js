import React, { createContext, useState } from 'react';

export const CartContext = createContext()

// custom provider

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([])
  
    const addToCartItem = (item) => {
      setCart([...cart, item])
    }
  
    const removeFromCart = (id) => {
      setCart(cart.filter(prod => prod.id !== id))
    }
  
    const emptyCart = () => {
      setCart([])
    }
  
    const onCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const totalCartCount = () => {
      return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
      return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCartItem,
            removeFromCart,
            emptyCart,
            onCart,
            totalCartCount,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

