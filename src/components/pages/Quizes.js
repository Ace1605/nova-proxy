import React from "react";
import QuizHub from "../quizhub/QuizHub";
import { FaFireFlameCurved } from "react-icons/fa6";
import Navbar from "../navbar/Navbar";

function Quizes() {
  return (
    <>
      <Navbar />
      <div className="container grid place-items-center pt-[4%] pb-12">
        <QuizHub />
      </div>
    </>
  );
}

export default Quizes;
