import React from 'react';
import './styles.css';

const ItemDetail = ({ product }) => {

  return (

    <section className="item-detail">
        <table>
            <thead>
              <tr>
                  <th>Id</th>
                  <th>Portada</th>
                  <th>Título</th>
                  <th>Detalle</th>
                  <th>Autor</th>
                  <th>Categoría</th>
                  <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{product.id}</td>
                  <td><img src={product.img} alt={product.title} /></td>
                  <td>{product.title}</td>
                  <td>{product.details}</td>
                  <td>{product.author}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
              </tr>
            </tbody>
        </table>
    </section>
  )
}

export default ItemDetail;