
import { useContext } from 'react';
import { LibraryContext } from '../Library';
import axios from 'axios';

export const useAuthors = () => {

    const { libraryState, setAuthors } = useContext(LibraryContext);

    const startLoadingAuthors = async() => {
        try {
            
            const response = await axios.get('http://localhost:3000/api/author/getAuthors');
            // console.log(response.data);
            setAuthors( response.data.authors );

        } catch (error) {
            console.log(error);
        }
    }

  return {
    //*properties
    libraryState,
    //*Methods
    startLoadingAuthors,
  }
}
