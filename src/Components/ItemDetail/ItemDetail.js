import React from 'react';
import './styles.css';

const ItemDetail = ({ product }) => {

  return (

    <section>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoría</th>
                <th>Precio</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.author}</td>
                <td>{product.category}</td>
                <td class="amount">{product.price}</td>
            </tr>
            </tbody>
        </table>
    </section>
  )
}

export default ItemDetail;