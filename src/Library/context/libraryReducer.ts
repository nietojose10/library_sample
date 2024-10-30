import { LibraryState, Book, Author } from '../';

type LibraryAction =
    | { type: 'setBooks', payload: Array<Book> }
    | { type: 'setAuthors', payload: Array<Author> };
    

export const libraryReducer = ( state: LibraryState, action: LibraryAction ): LibraryState => {
    
    console.log(action);
    // const { payload } = action;

    switch ( action.type ) {
        case 'setBooks':
            return {
                ...state,
                books: action.payload
            };
        case 'setAuthors':
            return {
                ...state,
                authors: action.payload
            }


        default:
            return {...state};
    }

}
