import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="head">
      <h1 className="logo">My Project</h1>
      <div className="nav">
        <a className="nav-home" href="">
          Home
        </a>
        <a className="nav-todo" href="">
          Todo
        </a>
        <a className="nav-su" href="">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
