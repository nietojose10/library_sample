import { useContext } from 'react';
import { Book, LibraryContext } from '../Library';
import axios from 'axios';



export const useBooks = () => {

    const { setBooks, libraryState } = useContext( LibraryContext );
    // let { libraryState } = useContext( LibraryContext );
    // const { books } = booksState;
    // let newBooks: Array<Book> = [];

    const startGettingBooks = async( searchBook: string ) => {
        try {
            const response = await axios.get('http://localhost:3000/api/book/getBooks', { params: { searchBook } });
            console.log(response);
            const { data } = response;
            // newBooks = data.books;
            setBooks( data.books );
            // console.log(data.books);
        } catch (error) {
            console.log(error);
        }
    }

    const startCreatingNewBook = async( { bookname, pages, chapters, authors }: Book ) => {
        try {
            const response = await axios.post('http://localhost:3000/api/book/new', { book_name: bookname, pages, chapters, authors });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

  return {
    //*properties
        libraryState: libraryState,
    //*methods
        startGettingBooks,
        startCreatingNewBook
  }
}
