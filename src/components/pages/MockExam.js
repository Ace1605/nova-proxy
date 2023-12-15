import React from "react";
import Navbar from "../navbar/Navbar";
import ExamSelect from "../Exams/ExamSelect";

function MockExam() {
  return (
    <>
      <Navbar />
      <div className="container grid place-items-center pt-[8%] pb-12">
        <ExamSelect />
      </div>
    </>
  );
}

export default MockExam;
