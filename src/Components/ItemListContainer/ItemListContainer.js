import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../products';
import Loader from '../Loader/Loader';


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
            {products.length !== 0 ?
            <ItemList products={products} />
            :
            <Loader/>
            }
        </div>
    )    
    
}

export default ItemListContainer