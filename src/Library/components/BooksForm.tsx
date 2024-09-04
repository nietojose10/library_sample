import { Col, Container, Form, Row } from 'react-bootstrap'
import Select from 'react-select'

export const BooksForm = () => {
    
    const handleSubmit = () => {
        console.log(`Submiting the form!`);
    }
  
    return (
        <div className="ctn-books-form">
            <Container>
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
                            // value={ username }
                            // onChange={ onInputChange }
                            // isInvalid={ !!usernameValid && formSubmitted }
                            />
                            <Form.Control.Feedback type="invalid">
                                {/* { usernameValid } */}
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
                            // value={ username }
                            // onChange={ onInputChange }
                            // isInvalid={ !!usernameValid && formSubmitted }
                            />
                            <Form.Control.Feedback type="invalid">
                                {/* { usernameValid } */}
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
                            // value={ username }
                            // onChange={ onInputChange }
                            // isInvalid={ !!usernameValid && formSubmitted }
                            />
                            <Form.Control.Feedback type="invalid">
                                {/* { usernameValid } */}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="id_speciality">
                            <Form.Label>Authors</Form.Label>
                            {/* <Form.Select 
                                // defaultValue="Seleccione"
                                name="speciality"
                                value={speciality}
                                onChange={onInputChange}
                                isInvalid={ !!specialityValid && formSubmitted }
                            >
                                <option value={''}>Seleccionar</option>
                                <option value="Ortodoncista">Ortodoncista</option>
                                <option value="Endodoncista">Endodoncista</option>
                                <option value="Rehabilitador Oral">Rehabilitador Oral</option>
                            </Form.Select> */}
                            <Select
                                // value={ formValues.speciality }
                                // onChange={( event ) => onSelectChange( event, 'speciality' )}
                                // options={
                                //     specialities.map( data => (
                                //         { value: data.speciality, label: data.speciality }
                                //     ))
                                // }
                                isMulti
                                placeholder="Select the authors of this book"
                            />
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </div>
    )
    }
