import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

function LeaderSection() {
  let lead = [
    {
      name: "Bukola O.",
      points: 100,
      time: "9:8s",
      current: false,
    },
    {
      name: "Bukola O.",
      points: 80,
      time: "9:8s",
      current: false,
    },
    {
      name: "Ace O.",
      points: 70,
      time: "9:8s",
      current: true,
    },
    {
      name: "Munachim O.",
      points: 30,
      time: "9:8s",
      current: false,
    },
    {
      name: "Bukola O.",
      points: 20,
      time: "9:8s",
      current: false,
    },
    {
      name: "Bukola O.",
      points: 10,
      time: "9:8s",
      current: false,
    },
  ];
  return (
    <div className="w-[20rem] 880:w-[30rem] mt-20 relative">
      <h3 className="text-2xl mb-4 tracking-tighter font-medium text-primary-1000 text-right">
        200 Points to free data!
      </h3>
      <ProgressBar completed={80} maxCompleted={100} className="progress" />
      <p className="mt-24 tracking-tighter text-center font-medium text-lg">
        {" "}
        You are 4th on the Leaderboard
      </p>
      <h2 className="text-3xl tracking-tighter my-3 text-center text-center font-medium text-primary-hmain">
        Leaderboard
      </h2>
      <div>
        {lead.map((x, index) => (
          <div
            className={
              x.current
                ? "flex items-center bg-primary-400 justify-between border-b border-neutral-300 shadow-md px-3 py-4"
                : "flex items-center justify-between border-b border-neutral-300 shadow-md px-3 py-4"
            }
            key={index}
          >
            <div className="flex items-center gap-2 880:gap-4">
              <p
                className={
                  x.current
                    ? "font-semibold text-lg text-white"
                    : "font-semibold text-lg"
                }
              >
                {index + 1}
              </p>
              <FaRegCircleUser
                className={
                  x.current
                    ? "bg-neutral-700 rounded-full text-3xl text-white"
                    : "bg-neutral-700 rounded-full text-3xl text-neutral-20"
                }
              />
              <p
                className={
                  x.current
                    ? "ml-3 880:ml-8 font-semibold text-lg text-white"
                    : "ml-3 880:ml-8 font-semibold text-lg"
                }
              >
                {x.name}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p
                className={
                  x.current
                    ? "font-semibold text-lg mr-2 880:mr-4 text-white"
                    : "font-semibold text-lg mr-2 880:mr-4"
                }
              >
                {x.points}
              </p>
              <IoMdTime className={x.current ? "text-white" : ""} />
              <p
                className={
                  x.current
                    ? "font-semibold text-xs text-white"
                    : "font-semibold text-xs"
                }
              >
                {x.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderSection;
