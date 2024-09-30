import React from "react";
import { Field, ErrorMessage } from "formik";

import "../styles/components/inputFields.css";

const InputFields = (props) => {
  const { type, name, title, className, id, placeholder } = props;

  return (
    <div className="input-field-container">
      <label htmlFor={id}>{title}</label>
      <Field
        name={name}
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
      />

      <ErrorMessage className="error-message" name={name} />
    </div>
  );
};

export default InputFields;
