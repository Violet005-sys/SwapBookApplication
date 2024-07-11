import React, { useState } from "react";
import { BASE_URL } from "../../utils/backend_services";

const Register = ({ setShowLoginForm }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    username: "",
  });

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(`Registration successful: ${response}`);
      alert('Registration successful');
      window.location.replace("/auth/login");
    } catch (error) {
      console.log(`Registration failed due to ${error.message}`);
    }
  };

  return (
    <div className="my-4 ">
      <h1 className="display-5 mb-4 text-center">Register Here</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center'>
        <div className="row my-2">
          <div className="col-md-6">
            <label htmlFor="first_name" className="form-label my-1">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="last_name" className="form-label my-1">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label my-1">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@gmail.com"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label my-1">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label my-1">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="0768790878"
              required
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="username" className="form-label my-1">
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
        </div>

        <div className="col mt-4 ">
          <button type="submit" className="btn btn-dark">
            Register
          </button>
        </div>
        <div className="col mt-3">
          <a className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#" onClick={() => setShowLoginForm(true)}>Already,have an account?Login Here</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
