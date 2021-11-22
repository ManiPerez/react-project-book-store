import readingImg from './Images/readingImg.png';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={readingImg} className="reading-img" alt="reading-img" />
        <p>
          Te damos la bienvenida a The Book Corner!
        </p>
        <p>
          Variedad de libros al alcance de un click
        </p>
      </header>
    </div>
  );
}

export default App;
