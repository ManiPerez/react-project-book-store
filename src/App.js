import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notification from './Components/Notification/Notification';
import { NotificationContextProvider } from './Context/NotificationContext';

const App = () => {

    return (
      <div className="App">
        <NotificationContextProvider>
            <BrowserRouter>
              <Navbar />
              <Notification/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='category/:categoryId' element={<ItemListContainer/>} />
                <Route path='detail/:paramId' element={<ItemDetailContainer />} />
                <Route path='count' element={<ItemCount/>} />
              </Routes>
            </BrowserRouter>
        </NotificationContextProvider>
      </div>
    );
}

export default App;