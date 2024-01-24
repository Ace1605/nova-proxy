import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

function Topics() {
  const location = useLocation();
  const navigate = useNavigate();

  const [documents] = useAllPrismicDocumentsByType("courses");
  console.log("hi", documents);
  return (
    <div>
      <p className="font-medium text-lg text-center -mt-8 mb-20">
        This course is sponsored by{" "}
        <img
          className="w-[3.4rem] h-[3rem] inline"
          src="/logo/coca-cola-logo.svg"
          alt="logo"
        />
      </p>
      <div
        className="my-8 880:my-12 mx-auto relative h-[14rem] w-[20rem] 880:w-[30rem] rounded-t-3xl"
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
      {documents?.map((topic) => (
        <p
          onClick={() => {
            navigate(`${location.pathname}/${topic.uid}`);
          }}
          className="cursor-pointer bg-primary-h700 text-white py-3 px-4 880:px-8 w-[18rem] 880:w-[30rem] my-3 font-medium shadow rounded-xl border border-primary-h700 mx-auto border-primary-400 hover:scale-105"
        >
          {topic.data.topic[0].text}
        </p>
      ))}
    </div>
  );
}

export default Topics;
