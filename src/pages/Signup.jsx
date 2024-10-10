import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { postUserSignUp } from "../utils/apis/api";
import SignupForm from "../components/SignupForm";

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[A-Za-z]+$/,
      "The Username should contain only alphabetic characters"
    )
    .min(2, "The first name must be at least 2 characters long")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const state = { username: "", email: "", password: "", confirmPassword: "" };
  const navigate = useNavigate();

  return (
    <div className="signup-bg-container">
      <h1 className="title">REGISTER</h1>

      <Formik
        initialValues={state}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const data = await postUserSignUp(values);
          console.log("SIGNUP DATA", data);
          try {
            if (data.status === 200) {
              navigate("/login");
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
        <SignupForm />
      </Formik>
    </div>
  );
};

export default Signup;
