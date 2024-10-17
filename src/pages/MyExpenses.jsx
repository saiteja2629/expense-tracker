import React, { useContext } from "react";
// import { format } from "date-fns";

import { MyContext } from "../MyContext";
import Navbar from "./Navbar";

import "../styles/myExpenses.css";

const MyExpenses = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div className="my-expense-bg-container d-flex flex-column align-items-center">
      <Navbar />

      <table className="my-expense-table">
        <thead className="expense-table-head">
          <tr>
            <th>Date</th>
            <th>Payment Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="expense-table-body">
          {state.expenses?.map((expense) => {
            return (
              <tr key={expense._id}>
                <td>{expense.date}</td>
                <td>{expense.paymentType}</td>
                <td>{expense.amount}</td>
                <td>{expense.categoryType}</td>
                <td>{expense.remarks}</td>
                <td>EDIT DELETE</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyExpenses;
