import React from 'react';
import './styles.css';
import { GiBookshelf } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

const labels = [{category: 'Aventura'}, {category: 'Policial'}, {category: 'Fantasía'}, {category: 'Ciencia Ficción'}, {category: 'Romance'}]

const NavLinks = (props) => {

  const {label} = props

  return (
    <li><a href="/#">{label}</a></li>
  )
}

const Navbar = () => {
    return (
      <div>
        {/* <nav className="navbar">
          <div className="navbar__brand">
            <GiBookshelf className="navbar__logo"/>
            <h2 className="navbar__title">The Book Corner</h2>
          </div>

          <div className="navbar__links">
            {labels.map(label => 
                <NavLinks label={label.category} />
                )}  
          </div>

          <div className="navbar__cart">
              <FaShoppingCart className="navbar__icon" />
              <span className="navbar__counter">0</span>
          </div>
        </nav> */}


        <header>
          <nav className="navbar">
              <a href="/#" className="navbar__brand"><GiBookshelf className="navbar__logo"/> The Book Corner</a>   
              <div className="navbar__menu">
                  <ul>
                  {labels.map(label => 
                      <NavLinks label={label.category} />
                      )} 
                  </ul>

                  <div className="navbar__cart">
                    <FaShoppingCart className="navbar__icon" />
                    <span className="navbar__counter">0</span>
                  </div>
              </div>                   
          </nav>
        </header>
      </div>
    )
}

export default Navbar;
