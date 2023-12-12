import React from "react";

function CustomInput({ placeholder, type }) {
  return (
    <div>
      <input
        className="py-3 px-8 my-3 rounded-3xl border border-primary-400 focus:border-2 border-primary-400 focus-visible:outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default CustomInput;
