import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../products';


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {     

        getProducts(categoryId).then(list => {
            setProducts(list)

        }).catch(err => {
            console.log(err);
        })   

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