import React from "react";

import '../styles/button.css'

const Button = (props) => {
  const { className, text } = props;

  return <button className={className}>{text}</button>;
};

export default Button;
