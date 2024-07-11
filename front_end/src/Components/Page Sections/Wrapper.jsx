import React from "react";
//should have proper background color and structure
//sidebar and main side
    //sidebar has profile and navigation links,log out button
    //main side has top bar and bottom section
    //top bar has logo and search bar
    //bottom section has page content
//profile and search bar
import "../css files/Wrapper.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Wrapper = ({children}) => {
  return (
    <div className="homePage">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="main">
        <div className="topBar">
            <TopBar />
        </div>
        <div className='pageContent'>
        <div className="cards-div ">
          <div className="row scrollable-content mb-5 pb-5">
           
            {children}
            <div style={{'height': '170px'}}></div>
          
          </div>
        
        </div>
    </div>
      </div>
    </div>
  );
};

export default Wrapper;
