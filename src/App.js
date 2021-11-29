import React from 'react';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer.js';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      greeting1="Te damos la bienvenida a The Book Corner!" 
      greeting2="Variedad de libros al alcance de un click"
      book="El Principito"
      author="Antoine de Saint-Exupéry"
      img="./images/el-principito.jpg" />
    </div>
  );
}

export default App;
