import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-bg-container">
      <div className="navbar-container d-flex flex-row justify-content-between align-items-center">
        <h1 className="logo">X-Pense</h1>

        <ul className="navbar-links d-flex flex-row justify-content-around align-items-center">
          <li>
            <Link to="/my-expenses">My Expenses</Link>
          </li>
          <li>
            <a href="#">Username</a>
          </li>
          <li>
            <a href="#">Profile Picture</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
