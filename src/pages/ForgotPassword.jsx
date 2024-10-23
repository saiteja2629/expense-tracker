import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { postResetPassword } from "../utils/apis/api";
import InputFields from "../components/InputFields";
import Button from "../components/Button";

import "../styles/form.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  newPassword: Yup.string()
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
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

const ForgotPassword = () => {
  const initialValues = { email: "", newPassword: "", confirmPassword: "" };
  const navigate = useNavigate();

  return (
    <div className="forgot-password-bg-container d-flex flex-column align-items-center">
      <h1 className="main-heading">Reset your password</h1>
      <h6 className="sub-heading">
        Enter your email address to reset your password.
      </h6>

      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const data = await postResetPassword(values);
          console.log(data);

          try {
            if (data.status === 200) {
              navigate("/login");
              resetForm();
            } else {
              // setToastMsg({ message: postDataResponse.message, isError: true });
              setSubmitting(false);
            }
          } catch (error) {
            console.log(error);
            // setToastMsg({ message: "Failed to post data", isError: true });
          }
        }}
      >
        <Form
          action="/verify-email"
          className="forgot-password-form-container d-flex flex-column justify-content-around align-items-center"
        >
          <InputFields
            type="email"
            name="email"
            title="Email"
            placeholder="Enter your email address"
            className="input-field"
            id="email"
          />

          <InputFields
            type="password"
            name="newPassword"
            title="New Password"
            placeholder="Enter new password"
            className="input-field"
            id="newPassword"
          />

          <InputFields
            type="password"
            name="confirmPassword"
            title="Confirm Password"
            placeholder="Confirm your password"
            className="input-field"
            id="confirmPassword"
          />

          <Button
            type="submit"
            className="reset-password-btn"
            text="Reset Password"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default ForgotPassword;
