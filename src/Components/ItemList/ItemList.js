import React from 'react';
import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products = []}) => {
    console.log('Aca estan los productos en ItemList', products);

    return (
        <div className="itemList">
            {products.map(product =><Item key={product.id} product={product}/> )} 
        </div>
    )
}

export default ItemList