import { AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LibraryProvider } from './Library/context/LibraryProvider';

export const LibraryApp = () => {
  return (
    <BrowserRouter>
      <LibraryProvider>
        <AppRouter/>
      </LibraryProvider>
    </BrowserRouter>
  )
}
