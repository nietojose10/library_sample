
export interface Author {
    idAuthor: number;
    authorName: string;
}

export interface Book {
    idBook?: number;
    bookname: string;
    chapters: number;
    pages: number;
    authors: Author[];
}

export interface LibraryState {
    books?: Book[],
    authors?: Author[]
}