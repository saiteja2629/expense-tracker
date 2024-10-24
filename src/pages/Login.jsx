import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { MyContext } from "../MyContext";
import { postUserLogin } from "../utils/apis/api";
import LoginForm from "../components/LoginForm";
import Toast from "../components/Toast";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const { state, setState } = useContext(MyContext);
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, isToastOpen: false }));
  };

  return (
    <div className="login-bg-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="title">LOGIN</h1>

      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const data = await postUserLogin(values);

          try {
            if (data.message === "Successful") {
              if (data.token) {
                sessionStorage.setItem("token", data.token);
                navigate("/");
                resetForm();
                setState((prev) => ({ ...prev, isToastOpen: false }));
              }
            } else {
              setState({
                toast: { message: data.message, isError: true },
                isToastOpen: true,
              });
              setSubmitting(false);
            }
          } catch (error) {
            console.log(error);
            setState({
              toast: { message: "Failed to post data", isError: true },
              isToastOpen: true,
            });
          }
        }}
      >
        <LoginForm />
      </Formik>

      <Toast
        isOpen={state.isToastOpen}
        closeHandle={handleClose}
        toast={state.toast}
      />
    </div>
  );
};

export default Login;
