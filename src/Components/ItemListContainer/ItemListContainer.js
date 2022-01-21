import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams([]);

    useEffect(() => {     

        if (categoryId !== undefined) {

            const list = getProductsByCategory(categoryId)
            list.then(list => {
                setProducts(list)
            })

        } else {
            const list = getProducts()
            list.then(list => {
                setProducts(list)
            })
        }

        return (() => {
            setProducts([])
        })
        
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <ItemList products={products} />
        </div>
    )    
    
}

export default ItemListContainer