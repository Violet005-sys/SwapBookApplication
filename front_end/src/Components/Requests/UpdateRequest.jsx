import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/backend_services";

import Cookies from "js-cookie";

const UpdateRequest = () => {
  const token = Cookies.get("token");
  const { id } = useParams();
  // console.log(`Book: ${id}`);
  const [request, setRequest] = useState({});
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [genre, setGenre] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(`${BASE_URL}/requests/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();

      if (response.ok) console.log(data);
      setRequest(data);
      setTitle(data.title);
      setAuthor(data.author);
      setGenre(data.genre);
      setDescription(data.description);
      setImage(data.image);
    };

    getRequest();
  }, [token, id]);

  //console.log(request);

  const [formData, setFormData] = useState({
    title: ``,
    author: ``,
    genre: ``,
    description: ``,
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
      const response = await fetch(`${BASE_URL}/requests/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      console.log(`Request update successful: ${response}`);
      //window.location.reload();
      console.log(formData);
    } catch (error) {
      console.log(`Update failed due to ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h3 className="pageTitle ">Edit This Book Request</h3>
      <div className=" g-3 flex-it">
      <div className="col-md-2 mx-4">
        <img src={image} alt="request" style={{'maxWidth': '250px'}} />
      </div>
      <form action="post" onSubmit={handleSubmit} className="my-2 px-4 col-md-9">
        <div className="row my-2">
          <div className="col-md-8">
            <div className="mb-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control py-2"
                id="title"
                name="title"
                placeholder={title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control py-2"
                id="author"
                name="author"
                placeholder={author}
                onChange={handleChange}
              />
            </div>
            <div className=" mb-2">
              <label htmlFor="genre">Genres</label>
              <input
                type="text"
                className="form-control py-2"
                id="genre"
                name="genre"
                placeholder={genre}
                onChange={handleChange}
              />
            </div>
            <div className=" mb-2">
              <label htmlFor="image">Link book's image</label>
              <input
                type="text"
                className="form-control py-2"
                id="image"
                name="image"
                placeholder={image}
                onChange={handleChange}
              />
            </div>
            <div className=" mb-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control py-2"
                id="description"
                name="description"
                placeholder={description}
                onChange={handleChange}
              />
            </div>
            <div className="text-center mt-2">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateRequest;
