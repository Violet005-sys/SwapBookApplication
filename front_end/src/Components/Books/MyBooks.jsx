import React,{useEffect, useState} from "react";
import { BASE_URL } from "../../utils/backend_services";
import Cookies from 'js-cookie'



const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const token = Cookies.get('token');

  useEffect(() =>{
    const getMyBooks = async() => {
      const response = await fetch(`${BASE_URL}/users/collections`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      });
      const data = await response.json();
      console.log(data);

      if(response.ok) setMyBooks(data);
      else console.log('Error fetching books');
    };
    getMyBooks();
  }, [token]);

  

  const renderRating = (rating) => {
    switch (rating) {
      case 1:
        return "✨";
      case 2:
        return "✨✨";
      case 3:
        return "✨✨✨";
      case 4:
        return "✨✨✨✨";
      case 5:
        return "✨✨✨✨✨";
      default:
        return "Please type a number between 1 and 5";
    }
  };

  // Helper function to convert a string to title case
  const toTitleCase = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Function to transform array elements to title case and join them with commas
  const commaAdd = (array) => {
    return array.map(toTitleCase).join(", ");
  };

  return myBooks.map((book) => {
    console.log(book.title)
    return (
      <div className="col-md-3">
        <a
          href={`/books/${book.book._id}`}
          className="link-offset-2 link-underline link-underline-opacity-0 "
        >
          <div className="card pt-5" key={book.title} style={{ maxWidth: "210px" }}>
            <img
              src={book.book.image}
              className="img-fluid rounded-start"
              alt="..."
            />

          </div>
          <div className="col-md-6">
            <div className="text-group g-0">
              <h5 className="books-title">{book.book.title}</h5>

              <p className="books-subtitle">{book.book.author}</p>

              <p className="books-smalltexts">
                <small className="text-body-secondary bold sub-texts">
                  {book.book.genre}
                </small>
                <br />
                <small className="text-body-secondary sub-texts">
                  {renderRating(book.book.rating)}
                </small>
              </p>
            </div>
          </div>
        </a>
      </div>
    );
  });
};

export default MyBooks;
