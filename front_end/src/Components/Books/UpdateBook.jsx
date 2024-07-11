import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/backend_services";

import Cookies from "js-cookie";

const UpdateBook = () => {
  const token = Cookies.get("token");
  const { id } = useParams();
  // console.log(`Book: ${id}`);
  const [book, setBook] = useState({});
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [genre, setGenre] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

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
      setTitle(data.title);
      setAuthor(data.author);
      setGenre(data.genre);
      setDescription(data.description);
      setImage(data.image);
    };

    getBook();
  }, [token, id]);

  console.log(book);

  const [formData, setFormData] = useState({
    title: `${title}`,
    author: `${author}`,
    genre: `${genre}`,
    description: `${description}`,
    rating: "",
    stateOfBook: "",
    personalComments: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      console.log(`Book post successful: ${response}`);
      window.location.replace('/contributions');
      console.log(formData);
    } catch (error) {
      console.log(`Post failed due to ${error.message}`);
    }
  };

  return (
    <div className="">
      <h3 className="pageTitle">Update A Book</h3>

      <form action="post" onSubmit={handleSubmit} className="my-4 text-center">
        <div className="row my-2">
          <div className="col-md-6">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="bookTitle"
                placeholder="Title"
                name="title"
                value={formData.title}
                readOnly
              />
              <label htmlFor="bookTitle">Title</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="bookAuthor"
                placeholder="Author"
                name="author"
                value={formData.author}
                readOnly
              />
              <label htmlFor="bookAuthor">Author</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="bookGenres"
                placeholder="Genres"
                name="genre"
                value={formData.genre}
                readOnly
              />
              <label htmlFor="bookGenres">Genres</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="bookImage"
                placeholder="Image link to the book"
                name="image"
                value={formData.image}
                readOnly
              />
              <label htmlFor="bookImage">Link book's image</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="file"
                className="form-control"
                id="bookFile"
                name="file"
              />
              <label htmlFor="bookImage" className="mb-2">
                Link book
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="bookDescription"
                placeholder="Description"
                name="description"
                value={formData.description}
                readdOnly
              />
              <label htmlFor="bookDescription">Description</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="number"
                max={5}
                min={1}
                className="form-control"
                id="bookRating"
                placeholder="Rating"
                name="rating"
                value={formData.rating}
              />
              <label htmlFor="bookRating">Rating</label>
            </div>

            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="bookState"
                aria-label="bookState"
                name="stateOfBook"
                value={formData.stateOfBook}
              >
                <option defaultValue>Select the state of the book</option>
                <option value="new">New</option>
                <option value="second-hand(used)">Second-hand</option>
                <option value="digital-copy">Digital Copy</option>
              </select>
            </div>

            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="bookComments"
                style={{ height: "120px" }}
                name="personalComments"
                value={formData.personalComments}
              ></textarea>
              <label htmlFor="bookComments">Comments</label>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
