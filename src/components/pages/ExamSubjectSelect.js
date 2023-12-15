import React from "react";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";
import SubjectComponent from "../Exams/SubjectComponent";

function ExamSubjectSelect() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.8,
        }}
        className="container grid place-items-center pt-[8%] pb-12"
      >
        <SubjectComponent />
      </motion.div>
    </>
  );
}

export default ExamSubjectSelect;
