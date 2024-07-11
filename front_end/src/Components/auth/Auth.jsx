import React,{ useState } from "react";
import Register from "./Register";
import Login from "./Login";

  //create state constants that are used to show log in form
  //conditionally render login form
  //pass down states as props
const Auth = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4 mt-5">

        <>
        {showLoginForm ? <Login setShowLoginForm={setShowLoginForm}/> : <Register setShowLoginForm={setShowLoginForm}/>}
        </>
        
        
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Auth;
