import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './Components/NotFound/NotFound';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>       
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route path='category/:categoryId' element={<ItemListContainer />}/>
          <Route path='detail/:paramId' element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;