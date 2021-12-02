import React from 'react';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer.js';
import Navbar from './Components/Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const product = [
  {
    id: 1,
    title: "El Principito", 
    author: "Antoine de Saint-Exupéry", 
    category: "novel",
    price: 500, 
    img: "./images/el-principito.jpg",
    stock: "43"
  },
  {
    id: 2,
    title: "Las Aventuras de Sherlock Holmes", 
    author: "Arthur Conan Doyle", 
    category: "novel",
    price: 650, 
    img: "./images/sherlock-holmes.jpg",
    stock: "34"
  }]

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(product => 
        <div key=>{product.id} class="card" style="width: 18rem;">
          <img src={product.img} class="card-img-top" alt={item.title} />
          <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.author}</p>
              <p class="card-text">{product.category}</p>
              <p class="card-text">{product.price}</p>
              <a href="/#" class="btn btn-primary">Ver detalle</a>
          </div>
        </div>
        )}
    </div>
  )
}

const App = () => {
  const list = getItems();

  list.then(response => {
    console.log(response);
    setListProduct(response);
  }, [])
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer items={listProduct} />
    </div>
  );
}

export default App;
