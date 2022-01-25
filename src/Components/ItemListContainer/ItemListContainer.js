import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../products';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
 
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {     

        getProducts(categoryId).then(list => {

            setProducts(list)
            
            setLoading(false)

        }).catch(err => {
            console.log(err);
        })   

        return (() => {
            setProducts([])
        })
        
    }, [categoryId])

    return (
        <div className="ItemListContainer">         
            {loading ?
            <Loader/>           
            :
            <ItemList products={products} />
            }
        </div>
    )    
    
}

export default ItemListContainer