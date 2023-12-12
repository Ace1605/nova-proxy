import React from "react";

function Button({ text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-[16.7rem] 880:w-[17.8rem] bg-primary-1000 text-white font-medium rounded-3xl py-3 px-8"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
