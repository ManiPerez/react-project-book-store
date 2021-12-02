import React from 'react';
import './styles.css'
import ItemCount from '../Components/ItemCount/ItemCount.js';
import Item from '../Components/Item/Item.js'

const ItemListContainer = () => {
    return (
        <header className="App-header">

            <div className="box-container">

                <Item />

                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Carrito</h5>
                        <p class="card-text">Productos: <ItemCount getInitial={1} getStock={15} onAdd={'Cantidad total:'} /></p>                  
                        <a href="/#" class="btn btn-primary">Sumar al carrito</a>
                    </div>
                </div>
                    
            </div>
        </header>

    )
}

export default ItemListContainer;