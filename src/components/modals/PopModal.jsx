import React from "react";
import { motion } from "framer-motion";

function PopModal({ closeModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="h-full grid place-items-center"
    >
      <div className="">
        <h2 className="text-center mb-8 text-3xl text-primary-h700 font-medium">
          Alright!!!
        </h2>
        <p className="text-base mt-4 880:text-lg font-medium text-neutral-700 text-center">
          You're on course to win a free bottle of coke
        </p>
        <img
          className="w-[10rem] my-8 h-[10rem] mx-auto"
          src="/images/coke-b.jpg"
          alt="logo"
        />
        <div className="flex justify-center mt-4">
          <p
            className="px-12 py-2 cursor-pointer bg-primary-h700 text-white rounded-xl hover:scale-90"
            onClick={() => {
              closeModal();
            }}
          >
            Let's Go
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default PopModal;
