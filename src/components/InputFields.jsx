import React from "react";
import { Field, ErrorMessage } from "formik";
import '../styles/components/signupForm.css'
const InputFields = (props) => {
  const { type, name, title, placeholder, className, id } = props;

  return (
    <div>
      <label className="label" htmlFor={id}>
        {title}
      </label>
      <Field
        type={type}
        name={name}
        className={className}
        id={id}
        placeholder={placeholder}
      />

      <ErrorMessage name={name} />
    </div>
  );
};

export default InputFields;
