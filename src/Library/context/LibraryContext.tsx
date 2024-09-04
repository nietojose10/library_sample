import { createContext } from 'react';
import { BooksState, Book } from '../interfaces/libraryInterfaces';

export type LibraryContextProps = {
    booksState: BooksState,
    getBooks: ( books: Array<Book> ) => void;
};

export const LibraryContext = createContext<LibraryContextProps>({} as LibraryContextProps);