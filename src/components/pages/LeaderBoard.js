import React from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import LeaderSection from "../leaderSection/LeaderSection";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";

function LeaderBoard() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.7,
        }}
        className="container grid place-items-center pt-[8%] pb-12"
      >
        <LeaderSection />
      </motion.div>
    </>
  );
}

export default LeaderBoard;
