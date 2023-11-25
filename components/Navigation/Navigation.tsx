import React from "react";
import HomeIcon from "../Icons/HomeIcon/HomeIcon";
import SettingsIcon from "../Icons/SettingsIcon/SettingsIcon";
import NavItem from "./NavItem";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";

const Navigation = () => {
  return (
    <>
      <aside
        className={`flex md:flex-col w-full md:w-fit justify-between items sticky border border-gray md:h-screen top-0 p-2 rounded-r-xl`}
      >
        <div className="flex md:flex-col items-start gap-4">
          <NavItem item="Home" icon={<HomeIcon />} />
          <NavItem item="Settings" icon={<SettingsIcon />} />
        </div>
        <div>
          <NavItem item={"Create"} icon={<PlusIcon />} />
        </div>
      </aside>
    </>
  );
};

export default Navigation;
