import React from "react";

function ExamIcons({ course }) {
  return (
    <div>
      <span>
        {course === "Jamb" ? (
          <img className="w-8/12 mx-auto" src="/images/jamb.jpg" alt="jamb" />
        ) : course === "Waec" ? (
          <img className="w-8/12 mx-auto" src="/images/waec.png" alt="waec" />
        ) : course === "SAT" ? (
          <img className="w-8/12 mx-auto" src="/images/sat.png" alt="satt" />
        ) : (
          <img
            className="w-8/12 mx-auto"
            src="/images/cambridge.png"
            alt="camb"
          />
        )}
      </span>
    </div>
  );
}

export default ExamIcons;
