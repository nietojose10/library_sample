import { Route, Routes } from 'react-router-dom'
import { LibraryHome, Books, Authors } from '../'

export const LibraryRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <LibraryHome/> }></Route>
        <Route path="/books" element={ <Books/> }></Route>
        <Route path="/authors" element={ <Authors/> }></Route>
    </Routes>
  )
}
