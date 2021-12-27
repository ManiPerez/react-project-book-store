import React from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { getItems } from '../../products';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getItems()
        list.then(list => {
            setProducts(list)
        })

        return (() => {
            setProducts([])
        })
    }, [])

    return (
        <div>

            <ItemDetail key={products.id} product={products}/>

        </div>   
    )
}

export default ItemDetailContainer;