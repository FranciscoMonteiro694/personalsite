import React from "react";
import "./Header.css";

type HeaderProps = {
  title: string;
};

const Header = () => {
  return (
    <div className="main-div">
      <div className="left-container">
        <a>Francisco</a>
      </div>
      <div className="right-container">
        <nav>
          <a className="a-button">Home</a>
          <a className="a-button">About</a>
          <a className="a-button">Experience</a>
          <a className="a-button">Education</a>
          <a className="a-button">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
