import React from "react";
import InputFields from "./InputFields";
// import { Link } from "react-router-dom";
import AnchorTag from "./AnchorTag";

import "../styles/components/signupForm.css";

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
          className="input-filed"
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

        <p className="login-register-link">
          Already have account? Login Here
          <AnchorTag href="/login" text="Login" />
        </p>
      </form>
    </>
  );
};

export default SignupForm;
