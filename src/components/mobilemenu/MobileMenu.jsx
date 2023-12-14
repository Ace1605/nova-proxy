import React, { useState } from "react";
import { BoxCancel, Hamburger } from "../svg/Menu";
import { easeInOut, motion } from "framer-motion";
import { FaFireFlameCurved } from "react-icons/fa6";

function MobileMenu() {
  const [show, setShow] = useState(false);

  const links = ["Mock Exam", "Performance", "Redeem", "Settings"];
  return (
    <div className="y-center block 880:hidden">
      <button
        onClick={() => setShow(!show)}
        className="my-auto h-10 w-10 rounded-lg"
      >
        {!show && (
          <div className="x-center">
            <Hamburger />
          </div>
        )}
      </button>

      {show && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: [-200, 0],
            opacity: 1,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          exit={{
            y: -200,
            opacity: 0,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          className="w-[100%] h-[100vh] border-b border-neutral-20 bg-white top-0 left-0 absolute w-full"
        >
          <div className="x-between w-full py-4 px-4">
            <button onClick={() => setShow(!show)} className="my-auto">
              <div className="x-center">
                <BoxCancel />
              </div>
            </button>
            <a href="/" onClick={() => setShow(false)} className="my-auto">
              <FaFireFlameCurved className="flex justify-self-start 880:justify-self-center text-primary-1000 text-4xl text-left" />
            </a>
          </div>
          <nav className="px-4 pb-4">
            <ul className="grid justify-center gap-1 880:gap-8">
              {links.map((item) => (
                <li key={item} className="my-1">
                  <a
                    href={"/" + item.toLocaleLowerCase().replace(" ", "-")}
                    className="gap-1 block font-bold text-neutral-700 text-center hover:underline hover:text-blackhue-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default MobileMenu;
