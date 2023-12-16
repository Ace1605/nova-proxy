import React from "react";
import Icons from "./Icons";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  return (
    <div className="px-4 880:px-12">
      {location.pathname.includes("courses") ? (
        <p className="text-center font-medium text-base 880:text-lg mt-4 880:-mt-4 mb-20">
          The <span className="text-primary-1000">Nova</span> education
          championship exam would take place on 3rd March 2024, sponsored by
          <span className="text-red-700"> Coca-Cola</span>,{" "}
          <span className="text-primary-navy">Indomie</span>, and{" "}
          <span className="text-yellow-100">MTN</span>
        </p>
      ) : (
        <p className="mb-12 text-center mb-8 text-primary-900 font-semibold text-base 880:text-2xl mt-4 880:-mt-8 tracking-tighter">
          Take a Nova mock exam
        </p>
      )}
      {location.pathname.includes("mock-exam") ? (
        <h2 className="text-lg tracking-tighter text-center 880:text-3xl my-8 880:my-8 font-semibold text-primary-900">
          Select an examination to practice for
        </h2>
      ) : (
        <h2 className="text-2xl tracking-tighter text-center 880:text-3xl my-12 880:my-8 font-semibold text-primary-900">
          My Classes
        </h2>
      )}
      <div className="grid grid-cols-2 560:grid-cols-3 gap-4 560:gap-12 880:gap-24 justify-items-center">
        {courses.map((course) => (
          <div
            onClick={() => {
              if (location.pathname.includes("mock-exam")) {
                navigate(`/exam-quiz`);
              } else {
                navigate(`/courses/${course.toLowerCase()}`);
              }
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
      <div className="flex justify-center gap-12 mt-20">
        <img
          className="w-[4rem] h-[3rem]"
          src="/logo/coca-cola-logo.svg"
          alt="logo"
        />
        <img
          className="w-[4rem] h-[3rem]"
          src="/logo/Logo_Indomie.svg"
          alt="logo"
        />
        <img
          className="w-[4rem] h-[3rem]"
          src="/logo/mtn-new-logo.svg"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Courses;
