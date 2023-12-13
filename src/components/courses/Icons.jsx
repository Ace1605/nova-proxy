import React from "react";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { SiMdbook } from "react-icons/si";
import { GiAfrica } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import { GiFrance } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

function Icons({ course }) {
  return (
    <div>
      <span>
        {course === "Maths" ? (
          <TfiRulerAlt2 className="text-3xl text-yellow-100" />
        ) : course === "English" ? (
          <SiMdbook className="text-3xl text-orange-900" />
        ) : course === "Science" ? (
          <GiMaterialsScience className="text-3xl text-primary-300" />
        ) : course === "French" ? (
          <GiFrance className="text-3xl text-primary-main" />
        ) : course === "Vocational Studies" ? (
          <GrUserWorker className="text-3xl text-red-400" />
        ) : (
          <GiAfrica className="text-3xl text-primary-900" />
        )}
      </span>
    </div>
  );
}

export default Icons;
