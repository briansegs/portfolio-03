import React from "react";

const RoundArrowButton = ({ icon, onClick }) => (
  <button
    type="button"
    className="rounded-full bg-white/40 p-3 text-3xl hover:bg-white/100"
    onClick={onClick}
  >
    {icon}
  </button>
);

export default RoundArrowButton;
