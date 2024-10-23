import React from "react";
import Navbar from "./Navbar";

import "../styles/myExpenses.css";
// import "../styles/navbar.css";

const MyExpenses = () => {
  return (
    <div className="my-expense-bg-container d-flex flex-column align-items-center">
      <Navbar />

      <table className="my-expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Payment Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>2022-12-01</td>
            <td>Credit Card</td>
            <td>$100.00</td>
            <td>Food</td>
            <td>Buying new ice cream</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyExpenses;
