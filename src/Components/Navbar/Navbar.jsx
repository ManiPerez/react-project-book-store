import React from 'react';
import './styles.css';
import { GiBookshelf } from 'react-icons/gi';
import CartWidget from './CartWidget';

const labels = [{text: 'Home'}, {text: 'books'}, {text: 'About'}, {text: 'Contact'}]

const NavLinks = (props) => {

  const {label} = props

  return (
    <a href="/#">{label}</a>
  )
}

const buttons = [{text: 'Log In'}, {text: 'Sign In'}]

const Button = (props) => {

  const {label} = props

  return (
    <button className="log-in">{label}</button>
  )
}

const Navbar = () => {
    return (
      <nav className="Navbar"> 
        <div className="logo">
            <GiBookshelf className="logo-icon"/>
            <h2 className="logo-label">The Book Corner</h2>
        </div>
        <div className="nav-links">
          {labels.map(label => 
            <NavLinks label={label.text} />
            )}         
          {buttons.map(label => 
            <Button label={label.text} />
            )}
          <CartWidget />  
        </div>
      </nav>
    )
}

export default Navbar;
