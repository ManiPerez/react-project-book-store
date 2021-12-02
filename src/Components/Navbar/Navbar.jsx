import React from 'react';
import './styles.css';
import { GiBookshelf } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

const labels = [{text: 'Inicio'}, {text: 'Libros'}, {text: 'Nosotros'}, {text: 'Contacto'}]

const NavLinks = (props) => {

  const {label} = props

  return (
    <a href="/#">{label}</a>
  )
}

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar__brand">
          <GiBookshelf className="navbar__logo"/>
          <h2 className="navbar__title">The Book Corner</h2>
        </div>

        <div className="navbar__links">
          {labels.map(label => 
              <NavLinks label={label.text} />
              )}  
        </div>

        <div className="navbar__cart">
            <FaShoppingCart className="navbar__icon" />
            <span className="navbar__counter">0</span>
        </div>
      </nav>
    )
}

export default Navbar;
