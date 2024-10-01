import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import SignupForm from "../components/SignupForm";

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[A-Za-z]+$/,
      "The First name should contain only alphabetic characters"
    )
    .min(2, "The first name must be at least 2 characters long")
    .required("First name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const state = { username: "", email: "", password: "", confirmPassword: "" };

  return (
    <div className="signup-bg-container">
      <h1 className="title">REGISTER</h1>
      
      <Formik
        initialValues={state}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={""}
      >
        <SignupForm />
      </Formik>
    </div>
  );
};

export default Signup;
