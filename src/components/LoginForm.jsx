import React from "react";
import InputFields from "./InputFields";
import Button from "./Button";
import AnchorTag from "./AnchorTag";

import '../styles/form.css'

const LoginForm = () => {
  return (
    <>
      <form className="login-form-container">
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

        <Button className="login-signup-btn" text="Login" />
      </form>

      <p className="navigate-text">
        Don't have an account?
        <AnchorTag href="/signup" text="Register" />
      </p>
    </>
  );
};

export default LoginForm;
