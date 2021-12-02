import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../../products';
import ItemCount from '../Components/ItemCount/ItemCount.js';
import ItemList from '../Components/ItemList/ItemList.js';

const ItemListContainer = () => {
    const [products, getProducts] = useState([])

    useEffect(() => {
        const list = getProducts()
        list.then(list => {
            getProducts(list)
        })

        return (() => {
            getProducts([])
        })
    }, [])

    return (
        <div className="container">

            <ItemList products={products} />
            <ItemCount />

        </div>
    )
}

export default ItemListContainer;