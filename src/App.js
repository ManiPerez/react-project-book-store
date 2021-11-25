import './App.css';
import ItemListContainer from './Components/Global/ItemListContainer';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      greeting1="Te damos la bienvenida a The Book Corner!" 
      greeting2="Variedad de libros al alcance de un click" />
    </div>
  );
}

export default App;
