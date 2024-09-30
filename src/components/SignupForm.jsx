import React from "react";
import InputFields from "./InputFields";

import '../styles/components/signupForm.css'

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

        
      </form>

      
    </>
  );
};

export default SignupForm;
