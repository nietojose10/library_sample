import { BooksState, Book } from '../interfaces/libraryInterfaces';

type LibraryAction =
    | { type: 'getBooks', payload: Array<Book> };

export const libraryReducer = ( state: BooksState, action: LibraryAction ): BooksState => {
    
    console.log(action);
    // const { payload } = action;

    switch ( action.type ) {
        case 'getBooks':
            return {
                ...state,
                books: action.payload
                // books: [ ...state.books ]
            }
    
        default:
            return state;
    }

}
