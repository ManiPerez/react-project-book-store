import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { GiBookshelf } from 'react-icons/gi';
import CartWidget from '../CartWidget/CartWidget';
import { getCategories } from '../../products';

const NavBar = () => { 

    const [categories, setCategories] = useState([])

    useEffect(() => {

      getCategories().then(categories => {

        setCategories(categories)
      })
      
    },[])

    return (
      <nav className="navbar">
        <div>
          <NavLink to={'/'} className="navbar__brand">
            <GiBookshelf className="navbar__logo"/>
            <h3> The Book Corner</h3>
          </NavLink>
        </div>
        <div className="navbar__categories">
          {categories.map(cat => <NavLink to={`/category/${cat.id}`} className='navbar__category' key={cat.id} >{cat.description}</NavLink>)}
        </div>
        <NavLink to={'/cart'} className='navbar__category'><CartWidget /></NavLink>
      </nav>
    )
}

export default NavBar