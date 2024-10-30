import { FormEvent, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Select, { MultiValue } from 'react-select';
import { useAuthors, useBooks, useForm } from '../../hooks';
import { Author } from '../interfaces/libraryInterfaces';
import { useNavigate } from 'react-router-dom';

interface Validation {
    [key: string]: any;
    formField: string;
    fn: (value: any) => boolean;
    message: string;
}

interface OptionType {
    value: number;
    label: string;
  }

const formValues = {
    bookname: '',
    chapters: '',
    pages: '',
};

const formValidations: Validation[] = [
    {
        formField: 'bookname',
        fn: (value: any) => value?.toString().length > 1,
        message: 'Bookname is a mandatory field.',
    },
    {
        formField: 'chapters',
        fn: (value: any) => value?.toString().length > 1,
        message: 'chapters is a mandatory field.'
    },
    {
        formField: 'pages',
        fn: (value: any) => value?.toString().length > 1,
        message: 'pages is a mandatory field.'
    }
];

export const BooksForm = () => {
    
    const { onInputChange, isFormValid, bookname, pages, 
        chapters, booknameValid, pagesValid, chaptersValid  } = useForm( formValues, formValidations);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { libraryState, startLoadingAuthors } = useAuthors();
    const { startCreatingNewBook } = useBooks();
    const [authorSelectValues, setAuthorSelectValues] = useState<MultiValue<OptionType>>([]);
    const navigate = useNavigate();

    const handleSelectChange = (options: MultiValue<OptionType>) => {
        setAuthorSelectValues(options);
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        const authors: Author[] = authorSelectValues.map( author => (
            { idAuthor: author.value , authorName: author.label }
        )
        );

        if ( !isFormValid ) return;
        console.log(`Submiting the form!`);
        await startCreatingNewBook({ bookname, pages: parseInt(pages), chapters: parseInt(chapters), authors });
        navigate('/');
    }

    useEffect(() => {
        startLoadingAuthors();
    }, []);
    
    return (
        <div className="ctn-books-form">
            <Row className="align-item-center">
                <Col>
                    <div className="title-form"><FontAwesomeIcon icon={faBook} size="2xl" style={{ color: "#BE7B72"}} /></div>
                    <hr className="hr-forms" />
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group 
                        as={Col} 
                        className="mb-3" 
                        controlId="id_bookname"
                    >
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter the name of the book"
                        name="bookname"
                        value={ bookname }
                        onChange={ onInputChange }
                        isInvalid={ !!booknameValid && formSubmitted }
                        />
                        <Form.Control.Feedback type="invalid">
                            { booknameValid }
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group 
                        as={Col} 
                        className="mb-3" 
                        controlId="id_chapters"
                    >
                    <Form.Label>chapters</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter the amount of chapters"
                        name="chapters"
                        value={ chapters }
                        onChange={ onInputChange }
                        isInvalid={ !!chaptersValid && formSubmitted }
                        />
                        <Form.Control.Feedback type="invalid">
                            { chaptersValid }
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group 
                        as={Col} 
                        className="mb-3" 
                        controlId="id_pages"
                    >
                    <Form.Label>Pages</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter the amount of pages"
                        name="pages"
                        value={ pages }
                        onChange={ onInputChange }
                        isInvalid={ !!pagesValid && formSubmitted }
                        />
                        <Form.Control.Feedback type="invalid">
                            { pagesValid }
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="id_speciality">
                        <Form.Label>Authors</Form.Label>
                        <Select<OptionType, true>
                            isMulti
                            value={authorSelectValues}
                            onChange={handleSelectChange}
                            options={
                                libraryState.authors!.map( author => (
                                    { value: author.idAuthor, label: author.authorName }
                                ))
                            }
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Button type='submit' className="btn-custom-primary">
                            Create Book
                    </Button>
                </Row>
            </Form>
        </div>
    )
}
