import React,{useEffect, useState} from 'react'
import { BASE_URL } from '../../utils/backend_services';
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom';

const RequestToBook = () => {

    const token = Cookies.get("token");
    const { id } = useParams();
    const [request, setRequest] = useState({});
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [genre, setGenre] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    let rating ;
    let stateOfBook ;
    let personalComments ;

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
    
      console.log(request);
      console.log(title);


  const [formData, setFormData] = useState({
    title: `${title} `,
    author: `${author}`,
    genre: `${genre}`,
    description: `${description}`,
    rating: `${rating}`,
    stateOfBook: `${stateOfBook}`,
    personalComments: `${personalComments}`,
    image: `${image}`,
    activity : ``
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/requests/new-book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(formData),
      });

      console.log(`Book post successful: ${response}`);
      //window.location.reload();
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
                value={title}
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
                value={author}
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
                value={genre}
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
                value={image}
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
                value={description}
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
                value={rating}
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
                value={stateOfBook}
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
                value={personalComments}
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
  

export default RequestToBook