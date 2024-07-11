import React, { useState } from "react";
import { BASE_URL } from "../../utils/backend_services";
import Cookies from 'js-cookie'


const PostBook = () => {
  const token = Cookies.get("token");
  const newFormData = new FormData();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    rating: "",
    stateOfBook: "",
    personalComments: "",
    image: "",
    file: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    newFormData.append("title", formData.title);
    newFormData.append("author", formData.author);
    newFormData.append("genre", formData.genre);
    newFormData.append("description", formData.description);
    newFormData.append("rating", formData.rating);
    newFormData.append("stateOfBook", formData.stateOfBook);
    newFormData.append("personalComments", formData.personalComments);
    newFormData.append("image", formData.image);
    newFormData.append("file", formData.file);

    try {
      const response = await fetch(`${BASE_URL}/books`, {
        method: "POST",
        headers: {
          "Accept": "*",
          "Authorization": token
        },
        body: newFormData,
      });

      console.log(`Book post successful: ${response}`);
      window.location.reload();
      console.log(formData);
    } catch (error) {
      console.log(`Post failed due to ${error.message}`);
    }
  };

    
  return (
    <div className="">
      <h3 className="pageTitle">Post A Book</h3>

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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <label htmlFor="bookImage">Link book's image</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="file"
                accept=".pdf,.epub"
                className="form-control"
                id="bookFile"
                name="file"
                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
              />
              <label htmlFor="bookImage" className="mb-2">Link book</label>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              >
                <option defaultValue >Select the state of the book</option>
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
                onChange={handleChange}
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

export default PostBook;
