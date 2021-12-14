import React from 'react';
import './styles.css';

const ItemDetail = ({ books }) => {

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
                  <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{books.rank}</td>
                  <td><img src={books.book_image} alt={books.title} /></td>
                  <td>{books.title}</td>
                  <td>{books.description}</td>
                  <td>{books.author}</td>
                  <td>{books.category}</td>
                  <td>$ {books.price}</td>
                  <td>{books.age_group}</td>
              </tr>
            </tbody>
        </table>
    </section>
  )
}

export default ItemDetail;