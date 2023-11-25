"use client";
import React from "react";
import HomeIcon from "../Icons/HomeIcon/HomeIcon";
import SettingsIcon from "../Icons/SettingsIcon/SettingsIcon";
import NavItem from "./NavItem";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";
import useStore from "@/state/store/store";
import NewCourseModal from "../NewCourseModal/NewCourseModal";

const Navigation = () => {
  const { isModalOpen, openModal } = useStore((state) => ({
    isModalOpen: state.isModalOpen,
    openModal: state.openModal,
  }));

  return (
    <>
      <aside
        className={`flex shadow md:flex-col w-full md:w-fit justify-between items sticky md:h-screen top-0 p-2`}
      >
        <div className="flex md:flex-col items-start gap-4">
          <NavItem item="Home" icon={<HomeIcon />} />
          <NavItem item="Settings" icon={<SettingsIcon />} />
        </div>
        <div>
          <NavItem item={"Create"} icon={<PlusIcon />} onClick={openModal} />
        </div>
      </aside>
      {isModalOpen && <NewCourseModal />}
    </>
  );
};

export default Navigation;
