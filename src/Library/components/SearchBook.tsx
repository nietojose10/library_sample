import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { useBooks } from '../../hooks/';
import { Book, Author } from '../interfaces/libraryInterfaces';
import '../libraryHome.css';
// import { LibraryContext } from '../context/LibraryContext';


const initFormState = {
    searchBook: ''
}

export const SearchBook = () => {
    
    const [formValues, setFormValues] = useState(initFormState);
    const { books, startGettingBooks } = useBooks();
    const newBooks = Object.values( books );
    const [ booksArray ] = newBooks;
    const [displayedBooks, setDisplayedBooks] = useState(booksArray);
    // const { booksState } = useContext( LibraryContext );

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log(booksArray);
        console.log(booksArray.length);
        if( booksArray.length > 0 ){

            const elements = booksArray.map( (element: Book) => {
                // console.log(element);
                return element
            });

            setDisplayedBooks(elements);
        }

    }, [books]);

    const handleSubmit = async(e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        await startGettingBooks(formValues.searchBook);
        // console.log(books);
        console.log(formValues);
    }
    
  return (
    <div id="id_search_container">
        <Container>
            <Row>
                <Col>
                    <div id="id_search_input_container">
                        <Form onSubmit={ handleSubmit }>
                            <InputGroup>
                                <InputGroupText id="search_book">Search Icon</InputGroupText>
                                <Form.Control 
                                    placeholder="Type the book's name"
                                    aria-label="search-book"
                                    aria-describedby="search_book"
                                    name="searchBook"
                                    value={ formValues.searchBook }
                                    onChange={ onInputChange }
                                />
                                <Button type="submit" className="btn-custom-primary">Search</Button>
                            </InputGroup>
                        </Form>
                    </div>
                </Col>
            </Row>
            <div id="id_table_container">
                <Table>
                    <thead>
                        <tr>
                            <th>ID Book</th>
                            <th>Book Name</th>
                            <th>Authors</th>
                            <th>Chapters</th>
                            <th>Pages</th>
                        </tr>
                    </thead>
                    <tbody id="id_tbody">
                        {
                            // console.log( displayedBooks )
                            ( displayedBooks.length > 0 )
                            &&
                            displayedBooks.map( (element: Book) => {
                                console.log(element);
                                const authors = element.authors.map( ( element: Author) => {
                                    return element.authorName
                                });
                                console.log(authors.join());

                                return (
                                    <tr key={element.idBook}><td>{element.idBook}</td><td>{element.bookName}</td><td>{authors.join(', ')}</td><td>{element.chapters}</td><td>{element.pages}</td></tr>
                                )
                            })
                            
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    </div>
  )
}
