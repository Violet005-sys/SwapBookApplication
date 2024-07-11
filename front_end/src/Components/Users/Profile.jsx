import React from "react";
import '../css files/SideBar.css'


const Profile = () => {
  return (
    <div className="text-center">
      <img
        src="https://i.pinimg.com/564x/72/b5/a4/72b5a448819bf5f9b0e4c5b1fc35cfe2.jpg"
        alt="Description"
        className="profileImage"
      />
      <div className="userName py-4">
        <h1 className="bold fs-5 ">VioletSwapped</h1>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Profile;
