import React from "react";

const ButtonBase = ({ title, styles }) => (
  <button className={`rounded-md font-primary capitalize ${styles}`}>
    {title}
  </button>
);

export default ButtonBase;
