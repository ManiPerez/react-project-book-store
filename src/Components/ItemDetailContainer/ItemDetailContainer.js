import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
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
        <section>

            <ItemDetail key={products.id} product={products}/>

        </section>   
    )
}

export default ItemDetailContainer;