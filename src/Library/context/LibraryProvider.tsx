
import { useReducer } from 'react';
import { LibraryContext, libraryReducer, Book, LibraryState, Author } from '../';

const INITIAL_STATE: LibraryState = {
  books: [
    {
      idBook: 1,
      bookname: 'Dracula',
      chapters: 13,
      pages: 217,
      authors: [ { idAuthor: 1, authorName: 'Bram Stoker' } ]
    },
    {
      idBook: 2,
      bookname: '100 anios de soledad',
      chapters: 15,
      pages: 615,
      authors: [ { idAuthor: 2, authorName: 'Gabriel Garcia Marquez' } ]
    }
  ],
  authors: [
    { idAuthor: 1, authorName: 'Bram Stoker'},
    { idAuthor: 2, authorName: 'Gabriel Garcia Marquez' },
    { idAuthor: 3, authorName: 'Lucila Gamero' },
    { idAuthor: 4, authorName: 'Jose Nieto' }
  ]
};

interface props {
    children: JSX.Element | JSX.Element[];
}

export const LibraryProvider = ({ children }: props ) => {

    const [libraryState, dispatch] = useReducer(libraryReducer, INITIAL_STATE);

    const setBooks = ( books: Array<Book> ) => {
      dispatch({ type: 'setBooks', payload: books })
    }

    const setAuthors = ( authors: Author[] ) => {
      dispatch({ type: 'setAuthors', payload: authors});
    }


  return (
    <LibraryContext.Provider 
      value={{ 
        libraryState: libraryState,
        setBooks: setBooks,
        setAuthors: setAuthors,
       }}>
        { children }
    </LibraryContext.Provider>
  )
}
