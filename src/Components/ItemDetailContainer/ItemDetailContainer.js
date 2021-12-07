import React from 'react';
import './styles.css';
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

            <ItemDetail products={products[0]}/>
            
        </section>   
    )
}

export default ItemDetailContainer;