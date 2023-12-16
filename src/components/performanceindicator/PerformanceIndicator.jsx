import React from "react";
import { Avatar1 } from "../svg/Avatar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PerformanceIndicator() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="slide-container w-[20rem] 880:w-[30rem]"
    >
      <div className="mt-[7rem] p-8 bg-white w-full rounded-xl">
        <div className="flex gap-2">
          <Avatar1 className="h-[3rem] w-[3rem]" />
          <div>
            <p className="text-red-700 font-medium">Linda Knor</p>
            <p className="text-neutral-700 font-medium">40 points</p>
          </div>
        </div>
        <p className="text-neutral-700 my-3 font-normal">
          Ranked 22 nationwide
        </p>
        <p className="text-neutral-700 my-3 font-normal">2 courses completed</p>
        <p className="text-neutral-700 my-3 font-normal">Level 1</p>
        <button
          className="bg-primary-h700 text-white py-2 px-4 w-full rounded-xl"
          type="button"
          style={{ marginRight: "20px" }}
          onClick={() => navigate("/leaderboard")}
        >
          View Leaderboard
        </button>
      </div>
    </motion.div>
  );
}

export default PerformanceIndicator;
