import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MyContext } from "../MyContext";
import { getMyExpenses } from "../utils/apis/api";

import "../styles/navbar.css";

const Navbar = () => {
  const { state, setState } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getMyExpensesData();
  }, []);

  const getMyExpensesData = async () => {
    const data = await getMyExpenses();
    setState({ expenses: data.expenses });
  };

  const onClickProfile = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar-bg-container">
      <div className="navbar-container d-flex flex-row justify-content-between align-items-center">
        <Link to="/" className="home-link">
          <h1 className="logo">X-Pense</h1>
        </Link>

        <ul className="navbar-links d-flex flex-row justify-content-around align-items-center">
          <li>
            <Link to="/my-expenses" onClick={getMyExpensesData}>
              My Expenses
            </Link>
          </li>
          <li className="profile-container d-flex flex-column">
            <div className="profile-container d-flex flex-row justify-content-between align-items-center">
              <p className="">{state.username}</p>
              <i className="bi bi-person-circle" onClick={onClickProfile}></i>
            </div>

            {isOpen && (
              <ul className="profile-dropdown">
                <li>
                  <Link to="/profile" className="profile-dropdown-list-items">
                    Profile
                  </Link>
                </li>
                <li>
                  <p className="logout-link" onClick={onClickLogout}>
                    Logout
                  </p>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
