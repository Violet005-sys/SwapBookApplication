import React, { useState } from 'react';
import Cookies from 'js-cookie'; // Ensure you have js-cookie installed and imported
import { BASE_URL } from '../../utils/backend_services'; // Replace with the actual path to your BASE_URL

const Login = ({setShowLoginForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        Cookies.set('token', data.token, { expires: 1000 }); // Set the token to expire in 1 day
        window.location.reload();
      } else {
        alert(`Please confirm your username and password then try again.`);
      }
    } catch (error) {
      console.log(`Login failed: ${error.message}`);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="my-4">
      <h1 className="display-5 mb-4 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center'>
      <div className="col-8 mb-2">
            <label htmlFor="username" className="form-label my-1 text-start">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="LauraSwapped"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        <div className="col-8">
          <label htmlFor="password" className="form-label my-1 text-start">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="col mt-4 text-center">
          <button type="submit" className="btn btn-dark ">
            Sign In
          </button>
        </div>
        <div className="col mt-3 text-center">
          <a className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#" onClick={() => setShowLoginForm(false)}>Don't have an account? Register Here</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
