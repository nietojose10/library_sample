import { Nav } from 'react-bootstrap'
import { NavBar } from '../../ui/';

interface props {
  children: JSX.Element | JSX.Element[]
}

export const LibraryLayout = ( { children }: props ) => {
  return (
    <div className="library-layout">
        <NavBar>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/authors">Authors</Nav.Link>
        </NavBar>
        <div className="container-in-layout" >
            { children }
        </div>
    </div>
  )
}
