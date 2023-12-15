import React from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../courses/Icons";
const courses = [
  "Maths",
  "English",
  "Social Studies",
  "Science",
  "French",
  "Vocational Studies",
];

function SubjectComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-xl tracking-tighter text-center 880:text-2xl my-12 880:my-8 font-semibold text-primary-900">
        Select course to practice questions
      </h2>
      <div className="grid grid-cols-2 560:grid-cols-3 gap-4 560:gap-12 880:gap-24 justify-center">
        {courses.map((course) => (
          <div
            onClick={() => {
              navigate("/exam-quiz");
            }}
            className="bg-white p-4 shadow-lg rounded-2xl grid justify-items-center h-[6rem] w-[9rem] 880:w-[8rem] 880:h-[8rem] text-center hover:bg-neutral-50 hover:scale-95 cursor-pointer"
          >
            <Icons course={course} />
            <p className="leading-[1.14rem] text-sm 880:text-base font-medium">
              {course}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectComponent;
