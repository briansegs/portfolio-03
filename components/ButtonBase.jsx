import React from "react";

const ButtonBase = ({ children, title, styles }) => (
  <button className={`rounded-lg font-primary capitalize ${styles}`}>
    {title}
    {children}
  </button>
);

export default ButtonBase;
