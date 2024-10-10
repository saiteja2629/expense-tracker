import React from "react";
import { Formik } from "formik";

import InputFields from "../components/InputFields";

const AddExpense = () => {
  const state = {};

  return (
    <div>
      <Formik
        initialValues={state}
        // validateOnMount
        // validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {}}
      >
        <InputFields
          type="date"
          name="date"
          className="date"
          id="date"
          placeholder="enter a date"
        />
        <InputFields
          type="text"
          name="date"
          className="date"
          id="date"
          placeholder="enter a date"
        />

        <InputFields
          type="text"
          name="ammount"
          className="ammount"
          id="ammount"
          placeholder="enter ammount"
        />

        <InputFields
          type="text"
          name="category"
          className="category"
          id="category"
          placeholder="enter a category"
        />
      </Formik>
    </div>
  );
};

export default AddExpense;
