import React from "react";

function PreQuiz({ getStart, subject }) {
  return (
    <div className="grid justify-items-center px-[4%] 880:px-[10%]">
      <h3 className="text-center w-full pb-2 font-medium border-b border-neutral-20 text-2xl">
        {subject} Past Questions
      </h3>
      <p className="text-center mt-8 font-medium text-neutral">
        Answer as many Questions as you can. Get at least 84% for a chance to
        win an Amazing reward from{" "}
        <img
          className="w-[3.2rem] h-[2.7rem] -ml-[0.2rem] -mt-[0.1rem] inline"
          src="/logo/coca-cola-logo.svg"
          alt="logo"
        />
      </p>
      <button
        className="bg-primary-h700  text-white mt-20 py-2 px-14 rounded-xl"
        type="button"
        style={{ marginRight: "20px" }}
        onClick={() => {
          getStart(true);
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default PreQuiz;
