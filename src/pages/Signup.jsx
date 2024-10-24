import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { MyContext } from "../MyContext";
import { postUserSignUp } from "../utils/apis/api";
import SignupForm from "../components/SignupForm";
import Toast from "../components/Toast";

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
  const { state, setState } = useContext(MyContext);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();

  const handleClose = () => {
    setState((prev) => ({ ...prev, isToastOpen: false }));
  };

  return (
    <div className="signup-bg-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="title">REGISTER</h1>

      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const data = await postUserSignUp(values);

          try {
            if (data.status === 200) {
              navigate("/login");
              resetForm();
              setState((prev) => ({ ...prev, isToastOpen: false }));
            } else {
              setState({
                toast: { message: data.message, isError: true },
                isToastOpen: true,
              });
              setSubmitting(false);
            }
          } catch (error) {
            setState({
              toast: { message: "Failed to post data", isError: true },
              isToastOpen: true,
            });
          }
        }}
      >
        <SignupForm />
      </Formik>

      <Toast
        isOpen={state.isToastOpen}
        closeHandle={handleClose}
        toast={state.toast}
      />
    </div>
  );
};

export default Signup;
