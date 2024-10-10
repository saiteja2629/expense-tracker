import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { postUserLogin } from "../utils/apis/api";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const state = { email: "", password: "" };
  const navigate = useNavigate();

  return (
    <div className="login-bg-container">
      <h1 className="title">LOGIN</h1>

      <Formik
        initialValues={state}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const data = await postUserLogin(values);

          console.log("LOGIN DATA :", data);

          try {
            if (data.message === 'Successful') {
              if (data.token) {
                sessionStorage.setItem("token", data.token);
                navigate("/");
                resetForm();
              }
            } else {
              setSubmitting();
            }
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <LoginForm />
      </Formik>
    </div>
  );
};

export default Login;
