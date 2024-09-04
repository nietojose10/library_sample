
import { useReducer } from 'react';
import { LibraryContext, libraryReducer, Book, BooksState } from '../';

const INITIAL_STATE: BooksState = {
  books: [
    {
      idBook: 1,
      bookName: 'Dracula',
      chapters: 13,
      pages: 217,
      authors: [ { authorName: 'Bram Stoker' } ]
    },
    {
      idBook: 2,
      bookName: '100 anios de soledad',
      chapters: 15,
      pages: 615,
      authors: [ { authorName: 'Gabriel Garcia Marquez' } ]
    }
  ]
};

interface props {
    children: JSX.Element | JSX.Element[];
}

export const LibraryProvider = ({ children }: props ) => {

    const [libraryState, dispatch] = useReducer(libraryReducer, INITIAL_STATE);

    const getBooks = ( books: Array<Book> ) => {
      dispatch({ type: 'getBooks', payload: books })
    }

  return (
    <LibraryContext.Provider 
      value={{ 
        booksState: libraryState,
        getBooks: getBooks
       }}>
        { children }
    </LibraryContext.Provider>
  )
}
