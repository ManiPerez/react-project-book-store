// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar.jsx';
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





{/* <>
<Router>
  <Navbar />
  <Routes>
    <Route exact path = "/" element={<ItemListContainer />} />
    <Route exact path = "/category/:categoryId" element={<ItemListContainer />} />
    <Route exact path = "/item/:Id" element={<ItemDetailContainer />} />
    <Route exact path = "*" element={<NotFound />} />
  </Routes>

</Router>
</> */}