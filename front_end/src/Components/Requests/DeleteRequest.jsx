import React,{useEffect} from 'react'
import Cookies from 'js-cookie'
import { BASE_URL } from '../../utils/backend_services';
import { useParams } from 'react-router-dom';

const DeleteRequest = () => {

  const token = Cookies.get('token');
  const { id } = useParams();

  useEffect(() => {
    const deleteBook = async () => {
      try {
        const response = await fetch(`${BASE_URL}/requests/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to delete the request');
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error deleting the request:', error.message);
      }
    };

    deleteBook();
    setTimeout(() => {
      window.location.replace('/books/requests');
    }, 1000);
  }, [token, id]);

  return (
    <div>
       { alert('Request deleted successfully')}
    </div>
  )
}

export default DeleteRequest