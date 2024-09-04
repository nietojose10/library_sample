import { Container, Nav, Navbar } from 'react-bootstrap';
import '../ui.css';

interface props {
    children: JSX.Element | JSX.Element[];
}

export const NavBar = ({ children }: props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary dynamic-navbar" >
        <Container fluid>
            <Navbar.Brand href="/" ><span className="logo_ns">Alexandria Library</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                { children }
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
