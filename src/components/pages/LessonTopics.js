import React from "react";
import Topics from "../topics/Topics";
import { FaFireFlameCurved } from "react-icons/fa6";

function LessonTopics() {
  return (
    <div className="grid place-items-center pt-[10%] pb-12">
      <FaFireFlameCurved className="flex justify-self-start 880:justify-self-center text-primary-1000 text-7xl 880:text-9xl text-left" />
      <Topics />
    </div>
  );
}

export default LessonTopics;
