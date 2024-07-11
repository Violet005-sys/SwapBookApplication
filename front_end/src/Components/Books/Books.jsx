import React from "react";
//should have proper background color and structure
//sidebar and main side
    //sidebar has profile and navigation links,log out button
    //main side has top bar and bottom section
    //top bar has logo and search bar
    //bottom section has page content
//profile and search bar
import '../css files/Wrapper.css';
import BookCards from "./BookCards";

const Books = () => {
  return (
  <>
          <div>
            <h1 className="fw-bold py-3">Popular Books</h1>
          </div>
          <BookCards/>
      </>  
  );
};

export default Books;
