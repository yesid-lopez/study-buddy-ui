"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ExpandIcon from "../Icons/ExpandIcon.tsx/ExpandIcon";
import UserIcon from "../Icons/UserIcon/UserIcon";
import HomeIcon from "../Icons/HomeIcon/HomeIcon";
import SettingsIcon from "../Icons/SettingsIcon/SettingsIcon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  console.log(isOpen);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.aside
        animate={isOpen ? "open" : "closed"}
        className={`flex flex-col gap-4 border border-gray md:h-screen top-0 p-2 ${
          isOpen ? "w-64" : "w-16"
        }}`}
      >
        <div className="border-b border-gray">
          <div className="p-2">
            <UserIcon />
          </div>
          <button
            title="Expand Navigation"
            type="button"
            onClick={toggleNavigation}
            className={"p-2 hover:bg-gray"}
          >
            <ExpandIcon />
          </button>
        </div>
        <div>
          <button title="Home" type="button" className="p-2">
            <HomeIcon />
          </button>
          <button title="Settings" type="button" className="p-2">
            <SettingsIcon />
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Navigation;
