import React from 'react';
import './styles.css';
import { GiBookshelf } from 'react-icons/gi';
import CartWidget from './CartWidget';

const labels = [
    {category: 'Aventura'}, 
    {category: 'Ciencia Ficción'}, 
    {category: 'Fantasía'}, 
    {category: 'Misterio'}, 
    {category: 'Romance'}, 
    {category: 'Terror'}
]

const NavLinks = (props) => {

  const {label} = props

  return (
    <li><a href="/#">{label}</a></li>
  )
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/#" className="navbar__brand"><GiBookshelf className="navbar__logo"/> The Book Corner</a>   
            <div className="navbar__menu">
                <ul>
                {labels.map(label => 
                    <NavLinks label={label.category} />
                    )} 
                </ul>

                <CartWidget />
            </div>                   
        </nav>
    )
}

export default Navbar;
