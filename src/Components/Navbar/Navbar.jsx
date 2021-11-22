import React from 'react';
import './styles.css';
import bookIcon from './bookIcon.png';

const Navbar = () => {
    return (
      <nav className="Navbar"> 
        <div className="icon-box">
          <img src={bookIcon} alt="book-icon"/>
          <p>The Book Corner</p>
        </div>
        <div className="nav-links">
          <a href="/#">Home</a>
          <a href="/#">Books</a>
          <a href="/#">About</a>
          <a href="/#">Contact</a>
          <a className="log-in" href="/#">Log In</a>
        </div>
      </nav>
    )
}

export default Navbar;
