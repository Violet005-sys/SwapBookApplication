import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/backend_services";

import Cookies from "js-cookie";

const ViewRequest = () => {
  const token = Cookies.get("token");
  const { id } = useParams();
  // console.log(`Book: ${id}`);
  const [request, setRequest] = useState({});

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
    };

    getRequest();
  }, [token, id]);

  console.log(request);

  return (
    <div>
      <div className="card mb-3 mt-0 g-3 scrollable-content">
        <div className="row g-0">
          <div className="col-md-3 my-4 ">
            <img
              src={request.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6 g-3">
            <div className="card-body ">
              <h5 className="book-title pb-2">{request.title}</h5>
              <h6 className="book-author pb-1">{request.author}</h6>

              <p id="book-text" style={{ display: "block" }}>
                <small className="text-body-secondary">{request.genre}</small>
              </p>
              <p className="book-desc">{request.description}</p>

              <button
                className="btn primaryButton"
                onClick={() => {
                  window.location.replace(`/request-to-book/${id}`);
                }}
              >
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </div>
                Add This Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRequest;
