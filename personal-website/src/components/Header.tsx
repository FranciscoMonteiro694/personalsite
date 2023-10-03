import React from "react";
import "./Header.css";

type HeaderProps = {
  title: string;
};

const Header = () => {
  return (
    <header className="main-div">
      <div className="left-container">
        <a>Francisco Monteiro</a>
      </div>
      <div className="right-container">
        <nav className="nav-menu">
          <a>Home</a>
          <a>About</a>
          <a>Experience</a>
          <a>Education</a>
          <a>Contact</a>
          <div className="dot"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
