import { Route, Routes } from 'react-router-dom';
import { LibraryRoutes } from '../Library';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <LibraryRoutes/> }></Route>
    </Routes>
  )
}
