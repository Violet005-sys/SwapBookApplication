import React, { useState, useEffect } from "react";
import "../css files/Books.css";
import { BASE_URL } from "../../utils/backend_services";
import Cookies from "js-cookie";

const ViewRequests = () => {
  const [requests, setRequests] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const getRequests = async () => {
      const response = await fetch(`${BASE_URL}/requests`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();

      if (response.ok) console.log(data);
      console.log(data.requests);
      setRequests(data.requests);
    };

    getRequests();
  }, [token]);

  return requests.map((request) => {
    return (
      
        <div
          className="card m-4"
          key={request.title}
          style={{ maxWidth: "210px" }}
        >
          <img
            src={request.image}
            className="img-fluid rounded-start"
            alt="request"
          />
          <a
            href={`/request/${request._id}`}
            className="link-offset-2 link-underline link-underline-opacity-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              class="bi bi-plus-circle-fill floatingButton"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </a>
        </div>
      
    );
  });
};

export default ViewRequests;
