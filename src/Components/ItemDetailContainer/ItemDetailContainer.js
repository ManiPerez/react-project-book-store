import React, { useState, useEffect } from 'react';
import './styles.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../products';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const { paramId } = useParams();

    useEffect(() => {        
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err);
        })

        return (() => {
            setProduct()
        })
        
    }, [paramId])

    return (
        <div className="ItemListContainer">
            {product !== undefined ?
            <ItemDetail product={product} />
            :
            <Loader/>
            }
        </div>
    )       
}


export default ItemDetailContainer