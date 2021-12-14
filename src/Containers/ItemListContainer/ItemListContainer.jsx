import React from 'react';
import ItemCount from '../../Components/ItemCount/ItemCount';
import SearchItems from '../../Components/SearchItems/SearchItems';
import ItemList from '../../Components/ItemList/ItemList';

const ItemListContainer = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
      
      const fetchBooks = async () => {
        const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=KZH2hCnSg8mYgquCEL6dhHHUpJbryqte`);
  
        setBooks(res.data.results.books);
        console.log(res.data.results.books);
      }
  
      fetchBooks();
  
    }, [])
    

    return (
        <section>
            <div className="container">

                <SearchItems label={books} />
                <ItemList label={books} />
                <ItemCount />
            
            </div>
        </section>   
    )
}

export default ItemListContainer;