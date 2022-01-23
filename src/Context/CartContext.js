import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState([]);

    const addToCart = (product, quantity) => {
        setCartCount([...cartCount, { ...product, quantity }]);
    };

    return (
        <CartContext.Provider
            value={{
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};