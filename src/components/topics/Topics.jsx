import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { englishT, mathT, socialT } from "./constants";

function Topics() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("english")) {
      setData(englishT);
    } else if (location.pathname.includes("maths")) {
      setData(mathT);
    } else {
      setData(socialT);
    }
  }, []);

  return (
    <div>
      <div
        className="my-8 880:my-12 relative h-[14rem] w-[20rem] 880:w-[30rem] rounded-t-3xl"
        style={{
          backgroundImage: `url("/images/bts.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center bg-white h-[5rem] w-full bottom-0 absolute rounded-t-3xl">
          <p className="text-center font-medium ">
            Select your preferred topic to learn
          </p>
        </div>
      </div>
      {data.map((x) => (
        <p
          onClick={() => {
            navigate(`${location.pathname}/${x.toLowerCase()}?${x}`);
          }}
          className="cursor-pointer bg-primary-h700 text-white py-3 px-4 880:px-8 w-[18rem] 880:w-[30rem] my-3 font-medium shadow rounded-xl border border-primary-h700 mx-auto border-primary-400 hover:scale-105"
        >
          {x}
        </p>
      ))}
    </div>
  );
}

export default Topics;
