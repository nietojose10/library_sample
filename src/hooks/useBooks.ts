import { useContext } from 'react';
import { LibraryContext } from '../Library';
import axios from 'axios';

export const useBooks = () => {

    const { getBooks } = useContext( LibraryContext );
    let { booksState } = useContext( LibraryContext );
    // const { books } = booksState;
    // let newBooks: Array<Book> = [];

    const startGettingBooks = async( searchBook: string ) => {
        try {
            const response = await axios.get('http://localhost:3000/api/book/getBooks', { params: { searchBook } });
            console.log(response);
            const { data } = response;
            // newBooks = data.books;
            getBooks( data.books );
            // console.log(data.books);
        } catch (error) {
            console.log(error);
        }
    }

  return {
    //*properties
        books: booksState,
    //*methods
        startGettingBooks
  }
}
