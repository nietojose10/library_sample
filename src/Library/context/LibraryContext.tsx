import { createContext } from 'react';
import { LibraryState, Book, Author } from '../interfaces/libraryInterfaces';

export type LibraryContextProps = {
    libraryState: LibraryState,
    setBooks: ( books: Array<Book> ) => void;
    setAuthors: (authors: Author[]) => void;
};

export const LibraryContext = createContext<LibraryContextProps>({} as LibraryContextProps);