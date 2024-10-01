import React from "react";

import '../styles/anchorTag.css'

const AnchorTag = (props) => {
  const { text, href } = props;

  return (
    <a className="navigate-link" href={href}>
      {text}
    </a>
  );
};

export default AnchorTag;
