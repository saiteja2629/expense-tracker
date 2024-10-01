import React from "react";
import InputFields from "./InputFields";

import '../styles/components/loginForm.css'
import Button from "./Button";
import AnchorTag from "./AnchorTag";

const LoginForm = () => {
  return (
    // <div className="login-form-container">
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

        <div className="animate-input">
          <input className="input" type="text" id="remember-me" />
          <label className="label" htmlFor="remember-me">Animate Label</label>
        </div>

        <Button className='login-btn' text='Login' />
      </form>

      <p className="login-register-link">
        Don't have an account? 
        <AnchorTag href="/signup" text="Register" />
      </p>
    </>
    // </div>
  );
};

export default LoginForm;
