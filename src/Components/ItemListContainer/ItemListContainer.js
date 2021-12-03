import React from 'react';
import './styles.css';
import { getProducts } from '../../products';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts()
        list.then(list => {
            setProducts(list)
        })

        return (() => {
            setProducts([])
        })
    }, [])

    return (
        <div className="container">

            <ItemList products={products} />
            <ItemCount />

        </div>
    )
}

export default ItemListContainer;