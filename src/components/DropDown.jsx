import React from "react";
import { Field, ErrorMessage } from "formik";

import "../styles/dropDown.css";

const DropDown = (props) => {
  const { title, values, name, className, id, placeholder } = props;

  return (
    <div className="drop-down-container d-flex flex-column justify-content-center">
      <label htmlFor={id}>{title}</label>
      <Field as="select" name={name} id={id} className={className}>
        <option value="" label={placeholder} />
        {values.map((each) => (
          <option key={each.id} value={each.type}>
            {each.type}
          </option>
        ))}
      </Field>

      <ErrorMessage className="error-message" component="div" name={name} />
    </div>
  );
};

export default DropDown;
