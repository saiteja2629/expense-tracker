import React from "react";

import Navbar from "./Navbar";
import AddExpense from "./AddExpense";

import '../styles/home.css'

const Home = () => {
  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <Navbar />
      <AddExpense />
    </div>
  );
};

export default Home;