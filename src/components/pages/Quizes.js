import React from "react";
import QuizHub from "../quizhub/QuizHub";
import { FaFireFlameCurved } from "react-icons/fa6";

function Quizes() {
  return (
    <div className="grid place-items-center pt-[8%] pb-12">
      <FaFireFlameCurved className="flex justify-self-start 880:justify-self-center text-primary-1000 text-7xl 880:text-9xl text-left" />
      <QuizHub />
    </div>
  );
}

export default Quizes;
