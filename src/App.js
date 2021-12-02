import React from 'react';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer.js';
import Navbar from './Components/Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
