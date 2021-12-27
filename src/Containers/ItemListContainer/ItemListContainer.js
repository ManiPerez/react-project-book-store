import React from 'react';
import './styles.css';
import ItemCount from '../../Components/ItemCount/ItemCount';
import { getProducts } from '../../products';
import ItemList from '../../Components/ItemList/ItemList';
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
        <div className='container'>
            <ItemCount /> 
            <ItemList products={products} />                           
        </div>
    )
}

export default ItemListContainer;