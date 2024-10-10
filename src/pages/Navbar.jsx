import React from "react";
import "../styles/navBar.css";

const Navbar = () => {
  return (
    <div className="navbar-bg-container d-flex flex-row justify-content-between">
      <div className="">
        <h1 className="">X-Pense</h1>
      </div>

      <ul className="nav-items d-flex flex-row justify-content-center">
        <li className="">My Expenses</li>
        <li className="">USERNAME</li>
        <li className="">
          <img src="" alt="Profile-pic" className="" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
