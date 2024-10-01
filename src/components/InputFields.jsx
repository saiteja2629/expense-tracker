import React from "react";
import { Field, ErrorMessage } from "formik";

import '../styles/inputFields.css'

const InputFields = (props) => {
  const { type, name, title, placeholder, className, id } = props;

  return (
    <div className="input-field-container">
      <label htmlFor={id}>{title}</label>
      <Field
        type={type}
        name={name}
        className={className}
        id={id}
        placeholder={placeholder}
      />

      <ErrorMessage className="error-message" name={name} />
    </div>
  );
};

export default InputFields;
