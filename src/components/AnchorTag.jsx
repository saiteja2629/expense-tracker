import React from "react";

const AnchorTag = (props) => {
  const { text, href } = props;

  return (
    <a className="" href={href}>
      {text}
    </a>
  );
};

export default AnchorTag;
