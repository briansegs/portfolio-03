import React from "react";

const ButtonBase = ({ title, styles }) => (
  <button className={`button ${styles}`}>{title}</button>
);

export default ButtonBase;
