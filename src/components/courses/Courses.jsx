import React from "react";
import Icons from "./Icons";
import { useNavigate } from "react-router-dom";
const courses = [
  "Maths",
  "English",
  "Social Studies",
  "Science",
  "French",
  "Vocational Studies",
];

function Courses() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-2xl tracking-tighter text-center 880:text-3xl my-12 880:my-8 font-semibold text-primary-900">
        My Classes
      </h2>
      <div className="grid grid-cols-2 560:grid-cols-3 gap-4 560:gap-12 880:gap-24 justify-center">
        {courses.map((course) => (
          <div
            onClick={() => {
              navigate(`/courses/${course.toLowerCase()}`);
            }}
            className="bg-white p-4 shadow-lg rounded-2xl grid justify-items-center h-[6rem] w-[9rem] 880:w-[8rem] 880:h-[8rem] text-center hover:bg-neutral-50 cursor-pointer"
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

export default Courses;
