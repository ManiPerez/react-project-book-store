import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../Components/Item/Item.js';
  
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


