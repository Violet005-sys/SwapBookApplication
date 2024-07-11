import React from 'react'
import '../css files/SideBar.css'
import Profile from '../Users/Profile'
import Cookies from 'js-cookie'


const SideBar = () => {
  const removeToken = () => {
    Cookies.remove('token');
    window.location.reload();
    
};
  return (
    <div className='mainSide px-3 text-center'>
        <div className="topSection">
            <Profile/>
        </div>
        <div className="navigationLinks text-center">
          <div className="navLink">
            <a href="/books" className="navLink poppins">All Books</a>
          </div>
          <div className="navLink ">
            <a href="/books/myBooks" className="navLink poppins">My Books</a>
          </div>
          <div className="navLink">
            <a href="/books/requests" className="navLink poppins">Requests</a>
          </div>
          <div className="navLink">
            <a href="/books/post" className="navLink poppins">Add A Book</a>
          </div>
          <div className="navLink">
            <a href="/contributions" className="navLink poppins">Contributions</a>
          </div>
          <div className="sideButtons py-5 ">
            <a className='btn primaryButton poppins' href="/requests/post-request">Post A Request</a>
            <button className='btn btn-light poppins' onClick={removeToken}>Log Out</button>
          </div>
        </div>
    </div>
  )
}

export default SideBar