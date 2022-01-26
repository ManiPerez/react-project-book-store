import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { GiBookshelf } from 'react-icons/gi';
import CartWidget from '../CartWidget/CartWidget';
import { db } from '../../Services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const NavBar = () => { 

    const [categories, setCategories] = useState([])

    useEffect(() => {
      getDocs(collection(db, 'categories')).then((querySnapshop) => {
        const categories = querySnapshop.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setCategories(categories)
      }).catch((error) => {
        console.log('Error searching categories', error);
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
          {categories.map(cat => 
            <NavLink 
              className='navbar__category' 
              key={cat.id}
              to={`/category/${cat.categoryId}`}
              >
                {cat.description}
            </NavLink>)
          }
        </div>
        <NavLink className='navbar__category' to={'/cart'}><CartWidget /></NavLink>
      </nav>
    )
}

export default NavBar