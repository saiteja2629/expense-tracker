import React from "react";
import { Link } from "react-router-dom";

import { getMyExpenses } from "../utils/apis/api";

import "../styles/navbar.css";

const Navbar = () => {
  const getMyExpensesData = async () => {
    const data = await getMyExpenses();

    console.log(data);
  };

  return (
    <div className="navbar-bg-container">
      <div className="navbar-container d-flex flex-row justify-content-between align-items-center">
        <h1 className="logo">X-Pense</h1>

        <ul className="navbar-links d-flex flex-row justify-content-around align-items-center">
          <li>
            <Link to="/my-expenses" onClick={getMyExpensesData}>
              My Expenses
            </Link>
          </li>
          <li>
            <p>Username</p>
          </li>
          <li>
            <p>Profile Picture</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
