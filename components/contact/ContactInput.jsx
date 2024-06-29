"use client";

import { useState } from "react";

const errorStyles = "outline outline-2 outline-offset-1 outline-primary ";

const styles =
  "w-full rounded-sm border-b-2 border-black px-3 pt-2 text-2xl tracking-[-0.5px] ring-secondary ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const inputHeight = "h-[68px]";

const ContactInput = ({
  type,
  placeholder,
  warning,
  onChange,
  id,
  isInvalid,
  value,
}) => {
  const [visited, setVisited] = useState(false);

  const showError = () => isInvalid && visited;

  return (
    <div className={inputHeight}>
      <input
        id={id}
        required
        className={`${styles} ${showError() && errorStyles}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={() => setVisited(true)}
      />
      {showError() && (
        <p className="font-primary font-semibold text-primary">{warning}</p>
      )}
    </div>
  );
};

export default ContactInput;
