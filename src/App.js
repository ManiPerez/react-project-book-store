import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import ItemCount from './Components/ItemCount/ItemCount';
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
          <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route exact path='/detail/:paramId' element={<ItemDetailContainer />} />
          <Route exact path='/count' element={<ItemCount />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;