import React from "react";
import PerformanceIndicator from "../performanceindicator/PerformanceIndicator";
import Navbar from "../navbar/Navbar";

function Performance() {
  return (
    <>
      <Navbar />
      <div className="container grid place-items-center pt-[4%] pb-12">
        <PerformanceIndicator />
      </div>
    </>
  );
}

export default Performance;
