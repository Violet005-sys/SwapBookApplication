import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/backend_services";
import "../css files/Wrapper.css";

import Cookies from "js-cookie";

const ViewBook = () => {
  const token = Cookies.get("token");
  const { id } = useParams();
 // console.log(`Book: ${id}`);
  const [book, setBook] = useState({});

  const collectSelectedBook = () => {
    //console.log(`Book selected: ${id}`);

    const addBookToCollection = async () => {
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

    addBookToCollection();
  };

  useEffect(() => {
    const getBook = async () => {
      const response = await fetch(`${BASE_URL}/books/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();

      if (response.ok) console.log(data);
      setBook(data);
    };

    getBook();
  }, [token, id]);

  //console.log(book);

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

  const details = document.getElementById("user-info");
  const desc = document.getElementById("book-desc");

  const showMoreDetails = () => {
    details.setAttribute("display", "block");
    desc.setAttribute("display", "none");
  };

  return (
    <div>
      <div className="card mb-3 mt-0 g-3 ">
        <div className="row g-0">
          <div className="col-md-3 my-4 sticky-content">
            <img
              src={book.image}
              className="img-fluid rounded-start"
              alt="..."
            />
            <p className="book-text text-center fs-4">
              <small className="text-body-secondary">
                Rating : {renderRating(book.rating)}
              </small>
            </p>
            
          </div>
          <div className="col-md-6 g-3 scrollable-content">
            <div className="card-body ">
              <h5 className="book-title pb-2">{book.title}</h5>
              <h6 className="book-author pb-1">{book.author}</h6>

              <p id="book-text" style={{ display: "block" }}>
                <small className="text-body-secondary">{book.genre}</small>
              </p>

              <div className="buttonGroup">
                <button
                  className="btn primaryButton "
                  onClick={collectSelectedBook}
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                  </div>
                  Add To Collection{" "}
                </button>
                <a
                target="_blank"
                  className="btn primaryButton-outline my-2"
                  href={`${BASE_URL}/images/${book.file}`}
                >
                  <div className="icon"></div>
                  Read Book
                </a>
              </div>
              <p className="book-desc">{book.description}</p>

              <div className="py-3" id="user-info" style={{ display: "none" }}>
                <p className="">Creator : {book.creator}</p>
                <p className="">Commentary: {book.personalComments}</p>
                <p className="">State of Book: {book.stateOfBook}</p>
                <p className="">Status Of Book: {book.statusOfBook}</p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
