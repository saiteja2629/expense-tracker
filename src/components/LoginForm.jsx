import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";

import InputFields from "./InputFields";
import Button from "./Button";
import AnchorTag from "./AnchorTag";

import "../styles/form.css";

const LoginForm = () => {
  return (
    <>
      <Form className="login-form-container d-flex flex-column justify-content-around align-items-center">
        <InputFields
          type="email"
          name="email"
          title="Email"
          className="input-field"
          id="email"
          placeholder="Enter email"
        />

        <InputFields
          type="password"
          name="password"
          title="Password"
          className="input-field"
          id="password"
          placeholder="Enter password"
        />

        <Button type="submit" className="login-signup-btn" text="Login" />
      </Form>

      <div className="auth-links-container d-flex flex-column align-items-center">
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot password?
        </Link>
        <p className="navigate-text">
          Don't have an account?
          <AnchorTag href="/signup" text="Register" />
        </p>
      </div>
    </>
  );
};

export default LoginForm;
