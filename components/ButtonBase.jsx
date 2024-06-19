import React from "react";

const ButtonBase = ({ children, title, styles }) => (
  <button className={`rounded-md font-primary capitalize ${styles}`}>
    {title}
    {children}
  </button>
);

export default ButtonBase;
