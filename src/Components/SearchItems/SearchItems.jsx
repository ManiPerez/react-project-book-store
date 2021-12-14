import React from 'react';
import './styles.css';
import { BiSearch } from 'react-icons/bi';


const SearchItems = () => {

   


    return (
        <div className='search-area'>
            <form 
                action=""
                 >
                <input 
                    type="text" 
                    placeholder='Buscar libros...'
                />
                <button className='search-btn' type='submit'><BiSearch /></button>
            </form>
            
        </div>
    )
}

export default SearchItems
