import React from 'react';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Navbar from '../Components/Navbar/Navbar';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />

    </div>
  );
}

export default App;
