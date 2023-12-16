import React from "react";
import Navbar from "../navbar/Navbar";
import Courses from "../courses/Courses";

function MockExam() {
  return (
    <>
      <Navbar />
      <div className="container px-4 880:px-12 grid place-items-center pt-[8%] pb-12">
        <Courses />
      </div>
    </>
  );
}

export default MockExam;
