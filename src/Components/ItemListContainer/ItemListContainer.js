import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { db } from '../../Services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
 
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => { 
        if (!categoryId) {
            setLoading(true)    
            
            getDocs(collection(db, 'items')).then((querySnapshop) => {
                const products = querySnapshop.docs.map(doc => {
                    
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('categoryId', '==', categoryId))).then((querySnapshop) => {
                const products = querySnapshop.docs.map(doc => {
                    
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
                setLoading(false)
            })
        }

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