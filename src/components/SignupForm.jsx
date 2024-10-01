import React from "react";
import InputFields from "./InputFields";
// import { Link } from "react-router-dom";
import AnchorTag from "./AnchorTag";
import Button from "./Button";

import '../styles/form.css'

const SignupForm = () => {
  return (
    <>
      <form className="signup-form-container">
        <InputFields
          type="text"
          name="username"
          title="Username"
          className="input-field"
          id="username"
          placeholder="Enter username"
        />

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

        <InputFields
          type="password"
          name="confirmPassword"
          title="Confirm Password"
          className="input-field"
          id="confirmPassword"
          placeholder="Enter Confirm password"
        />

        <Button className="login-signup-btn" text="Register" />
      </form>

      <p className="navigate-text">
        Already have account?
        <AnchorTag href="/login" text="Login" />
      </p>
    </>
  );
};

export default SignupForm;
