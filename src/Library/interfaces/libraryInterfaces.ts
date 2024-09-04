
export interface Author {
    authorName: string;
}

export interface Book {
    idBook: number;
    bookName: string;
    chapters: number;
    pages: number;
    authors: Author[];
}

export interface BooksState {
    books: Book[]
}