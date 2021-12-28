import React from 'react';
import { useEffect, useState } from 'react';
import './Navbar.css';
import { GiBookshelf } from 'react-icons/gi';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { getCategories } from '../../products'

const NavBar = () => { 
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then(categories => {
        setCategories(categories)
      })
    },[])
    console.log(categories)
    return (
        <nav className="navbar">
          <div>
              <Link className="navbar__brand" to={'/'}>
                <GiBookshelf className="navbar__logo"/>
                <h3> The Book Corner</h3>
              </Link>
          </div>
          <div className="navbar__categories">
            {categories.map(cat => <Link key={cat.id} className='navbar__category' to={`/category/${cat.id}`}>{cat.description}</Link>)}
          </div>
          <CartWidget />
        </nav>
    )
}

export default NavBar