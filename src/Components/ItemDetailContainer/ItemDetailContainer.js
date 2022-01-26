import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { db } from '../../Services/firebase';
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const [loading, setLoading] = useState(true);

    const { paramId } = useParams();

    useEffect(() => {   
        setLoading(true)     
        getDoc(doc(db, 'items', paramId)).then((querySnapshop) => {
            const product = {id: querySnapshop.id, ...querySnapshop.data()}
            setProduct(product)
        }).catch((error) => {
            console.log('Error searching items', error);
        }).finally(() => {
            setLoading(false)
        })
        
    }, [paramId])

    return (
        <div className="ItemListContainer">
            {loading ?
            <Loader/>           
            :
            <ItemDetail product={product} />
            }
        </div>
    )       
}


export default ItemDetailContainer