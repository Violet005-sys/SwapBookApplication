import React, { useState, useEffect } from "react";
import "../css files/Books.css";
import { BASE_URL } from "../../utils/backend_services";
import Cookies from "js-cookie";
//import booksData from "../data/dummyData";

const BookCards = () => {
  const [books, setBooks] = useState([]);
  const token = Cookies.get("token");
  

  const handleSelectedBook = async(id) => {
    console.log(`Book selected: ${id}`);
    
      const response = await fetch(`${BASE_URL}/users/collection/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          bookId: id,
        }),
      });
      if (response.ok) {
        window.location.reload();
      }
    };

    

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(`${BASE_URL}/books`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();

      if (response.ok) console.log(data);
      console.log(data.books);
      setBooks(data.books);
    };

    getBooks();
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

  return books.map((book) => {
    return (
      <div className="col-sm-5 col-md-3">
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
              fill="currentColor"
              class="bi bi-plus-circle-fill floatingButton"
              viewBox="0 0 16 16"
              onClick={() => {
                alert('Book added successfully')
                handleSelectedBook(book._id)
              }}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>

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
  });
};

export default BookCards;
