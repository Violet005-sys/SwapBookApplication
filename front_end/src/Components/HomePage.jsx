import React, {useState, useEffect} from "react";
//should have proper background color and structure
//sidebar and main side
    //sidebar has profile and navigation links,log out button
    //main side has top bar and bottom section
    //top bar has logo and search bar
    //bottom section has page content
//profile and search bar
import '../Components/css files/Wrapper.css';
import Cookies from 'js-cookie';
import { BASE_URL } from "../utils/backend_services";


const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [requests, setRequests] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const addBook = async () => {
      const response = await fetch(`${BASE_URL}/books/books-added`, {
        method: "GET",
        headers: {
          Content: "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
      setBooks(data);
    };
    addBook();
  }, [token]);

  
  


  useEffect(() => {
    const addRequests = async () => {
      const response = await fetch(`${BASE_URL}/requests/requests-added`, {
        method: "GET",
        headers: {
          Content: "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
      setRequests(data);
    };
    addRequests();
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

   const [isBlock, setIsBlock] = useState(false);

   const toggleDisplay = () => {
    setIsBlock(!isBlock);
   };

   
  return (
    
    <div className="container">
      <div className="row" >
      {
        books.map((book) => {
          return (
            <div className="col-md-3">
                <div className="card" key={book.title} style={{ maxWidth: "210px" }}>
                <a
                href={`/books/${book._id}`}
                className="link-offset-2 link-underline link-underline-opacity-0 "
              >
                  <img
                    src={book.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                  </a>

                  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                type="button"
                fill="currentColor"
                className="bi bi-three-dots floatingButton "
                style={{'color': 'var(--tertiary-color)'}}
                viewBox="0 0 16 16"
                onClick={() => {
                  toggleDisplay();
                }}
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
              <div className="buttongroup" style={{ display: isBlock ? "flex" : "none" }}>
                <button type="submit" className="badge-update" onClick={ () => {
                  window.location.replace(`/books/update/${book._id}`)}
                  }>
                  Update
                </button>
                <button type="submit" className="badge-delete"  onClick={() => {
                  setTimeout(() => {alert('Deleting Request in 1,2,3...')}, 1000);
                  window.location.replace(`/books/delete/${book._id}`)}}>
                  Delete
                </button>
              </div>
      
                </div>
                <div className="col-md-6">
                  <div className="text-group g-0">
                    <h5 className="books-title">{book.title}</h5>
      
                    <p className="books-subtitle">{book.author}</p>
      
                    <p className="books-smalltexts">
                      <small className="text-body-secondary bold sub-texts">
                        {commaAdd(book.genre)}
                      </small>
                      <br />
                      <small className="text-body-secondary sub-texts">
                        {renderRating(book.rating)}
                      </small>
                    </p>
                  </div>
                </div>
              
            </div>
          );
        })
      }
      {requests.map((request) => {
          return (
            <div
              className="card m-4 col-md-3"
              key={request.title}
              style={{ maxWidth: "210px" }}
            >
              <a
                href={`/request/${request._id}`}
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                <img
                  src={request.image}
                  className="img-fluid rounded-start"
                  alt="request"
                />
              </a>
              
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                type="button"
                fill="currentColor"
                className="bi bi-three-dots floatingButton "
                style={{'color': 'var(--tertiary-color)'}}
                viewBox="0 0 16 16"
                onClick={() => {
                  toggleDisplay();
                }}
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
              <div className="buttongroup" style={{ display: isBlock ? "flex" : "none" }}>
                <button type="submit" className="badge-update" onClick={ () => {
                  window.location.replace(`/update-request/${request._id}`)}
                  }>
                  Update
                </button>
                <button type="submit" className="badge-delete"  onClick={() => {
                  setTimeout(() => {alert('Deleting Request in 1,2,3...')}, 1000);
                  window.location.replace(`/delete-request/${request._id}`)}}>
                  Delete
                </button>
              </div>
              
            </div>
          );
        })}
      </div>
        </div>
  );
};

export default HomePage;
