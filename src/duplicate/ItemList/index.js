import React from 'react';
import './styles.css';
import Item from '../../Components/Item/Item';
  
const ItemList = ({ products }) => {
    return (
        <div className="container">
          {products.map(product => 
              <Item key={product.id} product={product} />
              )}  
        </div>
    )
}

export default ItemList


