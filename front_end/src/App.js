import "./Components/css files/App.css";
import Auth from "./Components/auth/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Wrapper from "./Components/Page Sections/Wrapper";
import HomePage from "./Components/HomePage";
import ViewBook from "./Components/Books/ViewBook";
import PostBook from "./Components/Books/PostBook";
import RequestPage from "./Components/Requests/RequestPage";
import PostRequest from "./Components/Requests/PostRequest";
import RequestToBook from "./Components/Requests/RequestToBook";
import MyBooks from "./Components/Books/MyBooks";
import UpdateBook from "./Components/Books/UpdateBook";
import Contributions from "./Components/Contributions";
import DeleteBook from "./Components/Books/DeleteBook";
import DeleteRequest from "./Components/Requests/DeleteRequest";
import ViewRequest from "./Components/Requests/ViewRequest";
import UpdateRequest from "./Components/Requests/UpdateRequest";
import BookCards from "./Components/Books/BookCards";
import Books from "./Components/Books/Books";



function App() {
  
  const token = Cookies.get("token");
  

  return (
    <div className="App">
      <>
        {token ? (
          <Wrapper>
            <Router>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/books" exact element={<Books />} />
                <Route path="/books/:id" element={<ViewBook />} />
                <Route path="/books/post" element={<PostBook />} />
                <Route path="/books/update/:id" element={<UpdateBook />} />
                <Route path="/books/delete/:id" element={<DeleteBook />} />
                <Route path="/books/myBooks" element={<MyBooks />} />
                <Route path="/books/requests" element={<RequestPage />} />
                <Route path="/requests/post-request" element={<PostRequest />} />
                <Route path="/request/:id" element={<ViewRequest />} />
                <Route path="/request-to-book/:id" element={<RequestToBook />} />
                <Route path="/contributions" element={<Contributions />} />
                <Route path="/delete-book" element={<DeleteBook />} />
                <Route path="/delete-request/:id" element={<DeleteRequest />} />
                <Route path="/update-request/:id" element={<UpdateRequest />} />
              </Routes>
            </Router>
          </Wrapper>
        ) : (
          <Auth />

        )}
      </>
    </div>
  );
}

export default App;
