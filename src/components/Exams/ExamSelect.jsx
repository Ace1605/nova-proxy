import React from "react";
import { useNavigate } from "react-router-dom";
import ExamIcons from "./ExamIcons";

const boards = ["Jamb", "Waec", "SAT", "Cambridge"];

function ExamSelect() {
  const navigate = useNavigate();
  return (
    <div>
      <p className="mt-4 text-neutral-700 font-medium tracking-tighter text-sm">
        Total points:
      </p>
      <p className="mb-4 text-neutral-700 text-3xl tracking-tighter font-medium">
        4000.00
      </p>
      <h2 className="text-lg tracking-tighter text-center 880:text-3xl my-8 880:my-8 font-semibold text-primary-900">
        Select an examination to practice for
      </h2>
      <div className="grid grid-cols-2 gap-7 560:gap-12 justify-items-center">
        {boards.map((board) => (
          <div
            onClick={() => {
              navigate(`/mock-exam/${board.toLowerCase()}`);
            }}
            className="bg-white p-4 shadow-lg rounded-2xl grid justify-items-center h-[7rem] w-full 880:w-8/12 880:h-[8rem] text-center hover:bg-neutral-50 hover:scale-95 cursor-pointer"
          >
            <ExamIcons course={board} />
            <p className="leading-[1.14rem] mt-3 text-sm 880:text-base font-medium">
              {board}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamSelect;
