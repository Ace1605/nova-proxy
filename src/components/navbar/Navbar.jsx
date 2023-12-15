import React from "react";
import MobileMenu from "../mobilemenu/MobileMenu";
import { motion } from "framer-motion";
import { FaFireFlameCurved } from "react-icons/fa6";

function Navbar() {
  const links = ["Mock Exam", "Performance", "Redeem", "Settings"];
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 z-[1000] bg-white  h-[5rem] border-b border-neutral-20"
    >
      <div className="container px-4 flex items-center justify-between 880:px-12 py-4 768:py-[1.15rem]">
        <a className="order-3 880:order-1" href="/">
          <img className="w-[3rem]" src="/logo/nova-logo.png" alt="waec" />
        </a>
        <nav className=" order-2 880:order-2 hidden 880:block">
          <ul className="flex gap-4 1180:gap-10">
            {links.map((item, index) => (
              <li key={index} className="font-normal">
                <a
                  href={"/courses" + item.toLocaleLowerCase().replace(" ", "-")}
                  className="flex gap-1 items-center text-primary-1000 font-semibold text-base hover:underline hover:text-blackhue-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="block 880:hidden order-1 880:order-3">
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
