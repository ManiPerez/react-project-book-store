import React, { useState, useEffect } from 'react';
import './styles.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../products';
import { useParams } from 'react-router-dom';

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
            <ItemDetail product={product} />
        </div>
    )       
}


export default ItemDetailContainer