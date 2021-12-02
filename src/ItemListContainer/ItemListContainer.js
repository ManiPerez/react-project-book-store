import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../../products';
import ItemCount from './ItemCount/ItemCount.js';
import ItemList from './ItemList/ItemList.js';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts()
        list.then(list => {
            setProducts(list)
        })

        return (() => {
            setProducts([])
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