import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { postExpenseData } from "../utils/apis/api";
import InputFields from "../components/InputFields";
import DropDown from "../components/DropDown";
import Button from "../components/Button";

import "../styles/addExpense.css";

const validationSchema = Yup.object({
  date: Yup.date().required("Date is required"),
  paymentType: Yup.string().required("Payment type is required"),
  amount: Yup.string().required("Amount is required"),
  categoryType: Yup.string().required("Category type is required"),
});

const paymentTypes = [
  { id: 1, type: "Cash" },
  { id: 2, type: "Debit Card" },
  { id: 3, type: "Credit Card" },
  { id: 4, type: "UPI" },
  { id: 5, type: "Net Banking" },
  { id: 6, type: "Wallet" },
  { id: 7, type: "Cheque" },
  { id: 8, type: "Other" },
];

const categoryTypes = [
  { id: 1, type: "Groceries" },
  { id: 2, type: "Eating Out" },
  { id: 3, type: "Transportation" },
  { id: 4, type: "Entertainment" },
  { id: 5, type: "Health & Fitness" },
  { id: 6, type: "Education" },
  { id: 8, type: "Rent" },
  { id: 9, type: "Insurance" },
  { id: 10, type: "Salary" },
  { id: 11, type: "Shopping" },
  { id: 12, type: "Investments" },
  { id: 13, type: "Loans" },
  { id: 14, type: "Donations" },
  { id: 15, type: "Gift Cards" },
  { id: 16, type: "Travel" },
  { id: 17, type: "Fuel" },
  { id: 18, type: "Pet Care" },
  { id: 19, type: "Home Improvement" },
  { id: 20, type: "Children's Expenses" },
];

const AddExpense = () => {
  const state = {
    date: "",
    paymentType: "",
    amount: "",
    categoryType: "",
    remarks: "",
  };
  
  return (
    <div className="add-expense-bg-container d-flex flex-column align-items-center">
      <Formik
        initialValues={state}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const data = await postExpenseData(values);

          try {
            if (data.status === 200) {
              resetForm();
            } else {
              // setToastMsg({ message: postDataResponse.message, isError: true });
              setSubmitting(false);
            }
          } catch (error) {
            // setToastMsg({ message: "Failed to post data", isError: true });
          }       
        }}
      >
        <Form className="expense-form-container d-flex flex-column align-items-center">
          <InputFields
            type="date"
            name="date"
            title="Date"
            className="input-field"
            id="date"
          />

          <DropDown
            title="Payment Type"
            values={paymentTypes}
            name="paymentType"
            className="input-field"
            id="paymentType"
            placeholder="Select payment type"
          />

          <InputFields
            type="text"
            name="amount"
            title="Amount"
            className="input-field"
            id="amount"
            placeholder="E.g. 500, 1000"
          />

          <DropDown
            title="Category"
            values={categoryTypes}
            name="categoryType"
            className="input-field"
            id="categoryType"
            placeholder="Select category type"
          />

          <InputFields
            type="text"
            name="remarks"
            title="Remarks"
            className="input-field"
            id="remarks"
            placeholder="Enter remarks"
          />

          <Button
            type="submit"
            className="add-expense-btn"
            text="Add X-Pense"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AddExpense;
