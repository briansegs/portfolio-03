import React from "react";

const RoundArrowButton = ({ icon, onClick }) => (
  <button
    type="button"
    className="rounded-full bg-white/40 p-3 text-3xl duration-500 ease-out hover:bg-white max-sm:hidden"
    onClick={onClick}
  >
    {icon}
  </button>
);

export default RoundArrowButton;
