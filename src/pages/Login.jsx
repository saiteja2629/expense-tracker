import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import LoginForm from "../components/LoginForm";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const state = { email: "", password: "" };

  return (
    <div className="login-bg-container">
      <h1 className="title">LOGIN</h1>

      <Formik
        initialValues={state}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={""}
      >
        <LoginForm />
      </Formik>
    </div>
  );
};

export default Login;
