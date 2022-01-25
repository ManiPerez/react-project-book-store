import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../products';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(true);

    const { paramId } = useParams();

    useEffect(() => {        
        getProductById(paramId).then(item => {

            setProduct(item)

            setLoading(false)
            
        }).catch(err => {
            console.log(err);
        })

        return (() => {
            setProduct([])
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